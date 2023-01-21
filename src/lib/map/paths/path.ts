import { inch_pixel_ratio } from "../field";
import { object, on } from "../objects/object";
import { Point } from "./point";
import { register_insert_option } from "../../context_menu/context_menu";
import { BezierCurve } from "./bezier";

@object
export class Path {
    readonly path: (Point|BezierCurve)[] = [];

    constructor() {
        register_insert_option({
            name: "Point",
            on_select: (x, y) => {
                this.path.push(new Point(x/inch_pixel_ratio, y/inch_pixel_ratio));
                // this.testing();
            }
        });

        register_insert_option({
            name: "Bézier Curve",
            on_select: (x, y) => {
                x /= inch_pixel_ratio;
                y /= inch_pixel_ratio;

                this.path.push(new BezierCurve(x, y, x, y-15, x+20, y-15, x+20, y));
                // this.testing();
            }
        });
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

    @on("postrender")
    render(ctx: CanvasRenderingContext2D) {
        
        this.testing();

        ctx.strokeStyle = "#DD0000";
        ctx.lineWidth = .5 * inch_pixel_ratio;
        ctx.lineCap = "butt";

        for (let i = 0; i < this.path.length-1; i++) {
            ctx.beginPath();
            if (this.path[i].points && this.path[i+1].points) {
                ctx.moveTo(this.path[i].points[3].x, this.path[i].points[3].y);
                ctx.lineTo(this.path[i+1].points[0].x, this.path[i+1].points[0].y);
            } else if (this.path[i].points) {
                ctx.moveTo(this.path[i].points[3].x, this.path[i].points[3].y);
                ctx.lineTo(this.path[i+1].x, this.path[i+1].y);
            } else if (this.path[i+1].points) {
                ctx.moveTo(this.path[i].x, this.path[i].y);
                ctx.lineTo(this.path[i+1].points[0].x, this.path[i+1].points[0].y);
            } else {
                ctx.moveTo(this.path[i].x, this.path[i].y);
                ctx.lineTo(this.path[i+1].x, this.path[i+1].y);
            }
            ctx.stroke();
        }
    }
}