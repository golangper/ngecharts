import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right1',
  templateUrl: './right1.component.html',
  styleUrls: ['./right1.component.css']
})
export class Right1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rightOption1 = {
      
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
              name:'销售渠道占比',
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
                  {value:74, name:'线上'},
                  {value:26, name:'线下'},
              ]
          }
      ]
  };
  
}
