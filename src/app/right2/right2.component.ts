import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right2',
  templateUrl: './right2.component.html',
  styleUrls: ['./right2.component.css']
})
export class Right2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rightOption2 = {
    color: ['#3398DB'],
    tooltip : {
        /*trigger: 'axis',*/
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            /*type : 'shadow'*/        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
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
            show : false, 
            splitLine: {
              show: false
            }
        }
    ],
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
            //给柱状图加颜色
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
  };
}
