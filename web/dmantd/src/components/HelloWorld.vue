<template>
  <div class="hello">
   <a-button type="primary">
      Primary
    </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">
      Dashed
    </a-button>
    <a-button type="danger">
      Danger
    </a-button>
    <a-config-provider :auto-insert-space-in-button="false">
      <a-button type="primary">
        按钮
      </a-button>
    </a-config-provider>
    <a-button type="primary">
      按钮
    </a-button>
    <a-button type="link">
      Link
    </a-button>
    <div style="background:#ECECEC; padding:30px" id="map">
    <a-card title="Card title" :bordered="false"  style="width: 300px;height:100px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card>
  </div>
  </div>
</template>

<script>
import { Scene, CityBuildingLayer, LineLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
export default {
  data(){
    return{
        scene:null
    }
    
  },

  mounted:function(){
        this.scene = new Scene({
          id: 'map',
          map: new GaodeMap({
            style: 'amap://styles/a49ef8d081db7b85adb2e90ba7941f1e?isPublic=true',
            center: [ 120.173104, 30.244072 ],
            pitch: 70.41138037735848,
            zoom: 17.18,
            rotation: 2.24, // 358.7459759480504
            minZoom: 14
          })
    });
    this.scene.on('loaded', () => {
  fetch(
    'https://gw.alipayobjects.com/os/rmsportal/ggFwDClGjjvpSMBIrcEx.json'
  )
    .then(res => res.json())
    .then(data => {
      const layer = new CityBuildingLayer(
        {
          zIndex: 0
        }
      );
      layer
        .source(data)
        .size('floor', [ 100, 3000 ])
        .color('rgba(242,246,250,0.5)')
        .animate({
          enable: true
        })
        .style({
          opacity: 1.0,
          baseColor: 'rgba(36,16,63,0.3)',
          windowColor: '#0e0220',
          brightColor: '#08faee'
        });
      this.scene.addLayer(layer);
    });
  fetch(
    'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json'
  )
    .then(res => res.json())
    .then(data => {
      const layer = new LineLayer({
        zIndex: 0
      })
        .source(data)
        .size(1)
        .shape('line')
        .color('#ff893a')
        .animate({
          interval: 1, // 间隔
          duration: 2, // 持续时间，延时
          trailLength: 2 // 流线长度
        });
      this.scene.addLayer(layer);
    });

});


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
 .map{
  width: 100px !important;
  height: 100px !important;
}
</style>
