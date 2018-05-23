import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  footerOption = {
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
            data : ['1', '1', '1', '1', '1', '1', '1','1','1','1','1', '1','1',],
            axisTick: {
                alignWithLabel: true
            },
            show: false, //去掉坐标线
            splitLine:{
                show:false //去掉网格线
            }
        }
        
    ],
    yAxis : [
        {
            type : 'value',
            show: false, //去掉坐标线
            splitLine:{
                show:true //去掉网格线
            }
        }
    ],
    series : [
        {
            name: 'jiang',//name
            type: 'bar',
            barWidth: '50%',
            data: [10, 52, 20, 33, 39, 33, 22, 99, 20, 33, 39, 33, 22],            
            label:{
                show:true,
                position:'top',//在顶部显示数值
                formatter:'{c}%'
            }
        },
        
    ]
  };

}
