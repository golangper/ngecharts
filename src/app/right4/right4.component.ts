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
              name:'客户分析',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
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
              data:[
                  {value:79, name:'老代理'},
                  {value:21, name:'新代理'},
              ]
          }
      ]
  };
}