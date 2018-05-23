###给图表添加背景
在图表外加一个外层div,给这个外层div设置背景
>html:

```
<!--html-->
<div class="setimg">
    <div echarts [options]="rightOption4" class='demo-chart'></div>
</div>
```

>css:

```
.setimg {
    width: 100px;
    height: 100px;
    margin:0 auto;
    background: url("../../assets/icon2.png") no-repeat;
    background-size:50px 50px;/*背景图片大小*/
    background-position: center center;/*背景图片居中*/
    border: 1px solid blue;/*没啥用，方便调试0.0*/
}
.demo-chart {
    width: 100%;   
    height: 100%;
    margin-top: 0 ;
}
```
>显示效果：


###在柱状图上方添加数字
在series:[]里添加
>ts:

```
series : [
        {
            name:'jiang',
            type:'bar',
            data: [40, 60, 50, 88, 67, 55, 34, 56],          
            label:{
                show:true,
                position:'top',//在顶部显示数值
            }
        },
        
    ]
```
>显示效果：

###在柱状图上方添加百分数（字符串）
* 和添加数字一样，只是增加一个`formatter`属性
* 不能直接在data里写字符串
```
series : [
        {
            name: 'jiang',//name
            type: 'bar',
            barWidth: '50%',
            data: [40, 60, 50, 88, 67, 55, 34, 56],           
            label:{
                show:true,
                position:'top',//在顶部显示数值
                formatter:'{c}%'//给数字后添加“%”
            }
        },
        
    ]
```
显示效果：


###去掉网格线和坐标线
在`xAxis:[]`和`yAxis:[]`中
```
xAxis : [
        {
            type : 'category',
            data : ['一', '二', '三', '四', '五', '六', '七','八'],
            axisTick: {
                alignWithLabel: true
            },
            show:false,//去掉坐标线
            splitLine:{
              show:false//去掉网格线
            },
            axisLabel: {
                show:true,
                textStyle:{
                    color:'#fff' //x轴字体颜色
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            show : true, 
            splitLine: {
              show: true
            }
        }
    ],
```
显示效果：

###改变柱状图颜色
```
series : [
        {
            name: 'jiang',
            type: 'bar',
            barWidth: '35%',
            data: [40, 60, 50, 88, 67, 55, 34, 56],
            label:{
                show:true,
                position:'top',
                formatter:'{c}%'
            },
            
            color: function(params) {
                // build a color map as your need.
                var colorList = [
                  '#FF0000','#FF6600','#FFFF00','#66FF00',
                   '#00FFFF','#0000FF','#CC00FF','#FF0099'
                ];
                return colorList[params.dataIndex]
            },
        }
    ]
```
###引入中国地图china.js
1. 引入china.js
2. ts中：

```
centerOption = {
    /*
    title: {
      //text: '订单量',
      //subtext: '纯属虚构',
      x: 'center'
    },
    */
   /*
    tooltip: { // 提示框组件。
      trigger: 'item' // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    },
    */
   /*
    legend: {
      orient: 'horizontal', // 图例的排列方向
      x: 'left', // 图例的位置
      //data: ['订单量']
    },
    */

    visualMap: { // 颜色的设置  dataRange
      x: 'left',
      y: 'center',
      splitList: [
        {
          start: 1500
        }, {
          start: 900,
          end: 1500
        }, {
          start: 310,
          end: 1000
        }, {
          start: 200,
          end: 300
        }, {
          start: 10,
          end: 200,
          label: '10 到 200（自定义label）'
        }, {
          start: 5,
          end: 5,
          label: '5（自定义特殊颜色）',
          color: 'black'
        }, {
          end: 10
        }
      ],
      //            min: 0,            max: 2500,            calculable : true,//颜色呈条状
      text: [
        '高', '低'
      ], // 文本，默认为数值文本
      color: ['#E0022B', '#E09107', '#A3E00B']
    },

    //工具栏
    /*
    toolbox: { // 工具栏
      show: true,
      orient: 'vertical', // 工具栏 icon 的布局朝向
      x: 'right',
      y: 'center',
      feature: { // 各工具配置项。
        mark: {
          show: true
        },
        dataView: {
          show: true,
          readOnly: false
        }, // 数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
        restore: {
          show: true
        }, // 配置项还原。
        saveAsImage: {
          show: true
        } // 保存为图片。
      }
    },
    */
    roamController: { // 控制地图的上下左右放大缩小 图上没有显示
      show: true,
      x: 'right',
      mapTypeControl: {
        'china': true
      }
    },
    series: [
      {
        //name: '订单量',
        type: 'map',
        mapType: 'china',
        roam: false, // 是否开启鼠标缩放和平移漫游
        dataRange: {// 颜色的变化设置
          x: 'left',
          y: 'bottom',
          splitList: [
              {start: 1500},
              {start: 900, end: 1500},
              {start: 310, end: 1000},
              {start: 200, end: 300},
              {start: 10, end: 200, label: '10 到 200（自定义label）'},
              {start: 5, end: 5, label: '5（自定义特殊颜色）', color: 'black'},
              {end: 10}
          ],
//            calculable : true,//颜色呈条状
//            text:['高','低'],// 文本，默认为数值文本
          color: ['#E0022B', '#E09107', '#A3E00B']
      },
        itemStyle: { // 地图区域的多边形 图形样式
          normal: { // 是图形在默认状态下的样式
            label: {
              show: true, // 是否显示标签
              textStyle: {
                color: 'rgb(249, 249, 249)'
              }
            }
          },
          emphasis: { // 是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
            label: {
              show: true
            }
          }
        },
        top: '3%', // 组件距离容器的距离
        data: [
          {
            name: '北京',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '天津',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '上海',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '重庆',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '河北',
            value: 0
          }, {
            name: '河南',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '云南',
            value: 5
          }, {
            name: '辽宁',
            value: 305
          }, {
            name: '黑龙江',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '湖南',
            value: 200
          }, {
            name: '安徽',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '山东',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '新疆',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '江苏',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '浙江',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '江西',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '湖北',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '广西',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '甘肃',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '山西',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '内蒙古',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '陕西',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '吉林',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '福建',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '贵州',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '广东',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '青海',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '西藏',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '四川',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '宁夏',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '海南',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '台湾',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '香港',
            value: Math.round(Math.random() * 2000)
          }, {
            name: '澳门',
            value: Math.round(Math.random() * 2000)
          }
        ]
      }
    ]
  };
```
3. html中
```
<div echarts [options]="centerOption" class='context'></div>
```