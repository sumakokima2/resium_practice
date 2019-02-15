import React from "react";
import { hot } from "react-hot-loader";
import { Cartesian3 } from "cesium";
import { Color, ImageMaterialProperty,SingleTileImageryProvider } from "cesium";
import { Math } from "cesium";
import { Viewer, Entity, ImageryLayer } from "resium";
import { RectangleGraphics } from "resium";

const imageryProvider = new SingleTileImageryProvider({
    url: "../map01.png",
    rectangle: Cesium.Rectangle.fromDegrees(31.416667,34.333333, 34.416667,35.333333)
  });


/*
<Entity
     id= "map01"
     rectangle={{
        coordinates : Cesium.Rectangle.fromDegrees(-97.5, 25.0, -88.0, 35.0),
        material: "../map01.png",
        alpha: 0
  }} />
*/

const App = () => (
  <Viewer full>
    <Entity
      name="Tokyo"
      position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
      point={{ pixelSize: 10 }}
      description="hoge"
    />
    <Entity
          name="RectangleGraphics"
          description="RectangleGraphics!!"
          position={Cartesian3.fromDegrees(31.416667,34.333333, 0)}>
          <ImageryLayer
            // rectangle={Cesium.Rectangle.fromDegrees(-97.5, 25.0, -88.0, 35.0)}
            alpha={0.5}
            imageryProvider={imageryProvider}
          />
        </Entity>
    
  
  </Viewer>
);

export default hot(module)(App);