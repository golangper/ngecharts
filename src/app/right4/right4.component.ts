import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right4',
  templateUrl: './right4.component.html',
  styleUrls: ['./right4.component.css']
})
export class Right4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rightOption4 = {
      
    tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      /*
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销']
      },
      */
      series: [
          {
              name:'模块四',
              type:'pie',
              radius: ['40%', '50%'],
              avoidLabelOverlap: false,

              /**
               * 去掉label和labelLine会显示指示线（有点奇怪）
               */
              /**
               * label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
               */
              
              data:[
                  {value:79, name:'part1'},
                  {value:21, name:'part2'},
              ]
          }
      ]
  };
}