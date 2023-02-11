
import './PageWatermark.css'


export default function PageWatermark({onPage}) {

    return (
            <text className="page-watermark">{onPage}</text>
    );
}