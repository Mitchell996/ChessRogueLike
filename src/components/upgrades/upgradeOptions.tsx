
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import { FigureData } from "types";


class UpgradeOptions extends React.Component {

public figure: FigureData | null;
constructor(props: any, figure: FigureData | null){
    super(props);
    this.figure = figure;
}
render(){
return(
    <div className="placeholder">


    </div>
)}
}
export default UpgradeOptions;