import { inch_pixel_ratio } from "../field";
import { on_event } from "../objects/object";
import { Point } from "./point";
import { register_insert_option } from "../../context_menu/context_menu";
import { BezierCurve } from "./bezier";

export class Path {
    readonly path: (Point | BezierCurve)[] = [];

    constructor() {
        register_insert_option({
            name: "Point",
            on_select: (x, y) =>
                this.path.push(new Point(x / inch_pixel_ratio, y / inch_pixel_ratio))
        });

        register_insert_option({
            name: "Bézier Curve",
            on_select: (x, y) => {
                x /= inch_pixel_ratio;
                y /= inch_pixel_ratio;

                this.path.push(new BezierCurve(x, y, x, y - 15, x + 20, y - 15, x + 20, y));
            }
        });

        on_event("postrender", (ctx: CanvasRenderingContext2D) => this.render(ctx));
    }

    rnd(val){
        return Math.round(val * 10) / 10
    }

    testing(){
        let code = ""
        for(let point of this.path){
            if(point.points){
                // Bezier
                code += "robot.followCurve(pos(" + this.rnd(point.points[0].x / inch_pixel_ratio) + ", " + this.rnd(point.points[0].y / inch_pixel_ratio) + "), pos(" + this.rnd(point.points[1].x / inch_pixel_ratio) + ", " + this.rnd(point.points[1].y / inch_pixel_ratio) + "), pos(" + this.rnd(point.points[2].x / inch_pixel_ratio / inch_pixel_ratio) + ", " + this.rnd(point.points[2].y / inch_pixel_ratio) + "), pos(" + + this.rnd(point.points[3].x / inch_pixel_ratio) + ", " + this.rnd(point.points[3].y / inch_pixel_ratio) + "));\n"
            }
            else {
                // Point
                code += "robot.driveTo(" + this.rnd(point.x / inch_pixel_ratio) + ", " + this.rnd(point.y / inch_pixel_ratio) + ");\n"
            }
        }
        console.log(code)
    }

    render(ctx: CanvasRenderingContext2D) {
        this.testing();

        ctx.strokeStyle = "#DD0000";
        ctx.lineWidth = .5 * inch_pixel_ratio;
        ctx.lineCap = "butt";

        for (let i = 0; i < this.path.length - 1; i++) {
            ctx.beginPath();

            const path_segment = this.path[i];
            const next_segment = this.path[i + 1];

            if ("points" in path_segment && "points" in next_segment) {
                ctx.moveTo(path_segment.points[3].x, path_segment.points[3].y);
                ctx.lineTo(next_segment.points[0].x, next_segment.points[0].y);
            } else if ("points" in path_segment && !("points" in next_segment)) {
                ctx.moveTo(path_segment.points[3].x, path_segment.points[3].y);
                ctx.lineTo(next_segment.x, next_segment.y);
            } else if (!("points" in path_segment) && "points" in next_segment) {
                ctx.moveTo(path_segment.x, path_segment.y);
                ctx.lineTo(next_segment.points[0].x, next_segment.points[0].y);
            } else if (!("points" in path_segment) && !("points" in next_segment)) {
                ctx.moveTo(path_segment.x, path_segment.y);
                ctx.lineTo(next_segment.x, next_segment.y);
            }
            ctx.stroke();
        }
    }
}