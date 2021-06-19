// spider web (polar) chart
Highcharts.chart('polar-container', {
    chart: {
      polar: true,
      type: 'line',
      backgroundColor: 'rgba(0,0,0,0)'
    },

    title: {
      text: '세영님과 95% 일치합니다.'
    },

    subtitle: {
      text: '세영님과 힐링별밤수목원캠핑장에 대한 분석결과입니다.'
    },

    pane: {
      size: '70%'
    },

    xAxis: {
      categories: ['안전성', '청결함', '접근성', '편의성', '다양성'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical'
    },

    series: [{
      name: '힐링별밤수목원캠핑장',
      data: [43000, 19000, 60000, 35000, 17000],
      pointPlacement: 'on'
    }, {
      name: '사용자',
      data: [50000, 39000, 42000, 31000, 26000],
      pointPlacement: 'on'
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
          },
          pane: {
            size: '70%'
          }
        }
      }]
    }
  });

// line chart
Highcharts.chart('line-container', {
  chart: {
    backgroundColor: 'rgba(0,0,0,0)'
  },

  title: {
    text: '힐링별밤수목원캠핑장의 예상 혼잡도'
  },

  subtitle: {
    text: '2021.06.20 ~ 2021.06.26 기준'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [{
    name: '앞으로 1주일 간 예상 방문율',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: '지난 1주일 간 방문율',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }
  ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
});

// bubble chart
Highcharts.chart('bubble-container', {
  chart: {
    type: 'packedbubble',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    text: '힐링별밤수목원캠핑장의 주요태그'
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
  },
  plotOptions: {
    packedbubble: {
      minSize: '20%',
      maxSize: '100%',
      zMin: 0,
      zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.1
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        filter: {
          property: 'y',
          operator: '>',
          value: 10 // visible filter
        },
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal'
        }
      }
    }
  },
  series: [{
    name: '상위 n개 카테고리',
    data: [{
        name: '분위기 좋은',
        value: 767.1
      }, {
        name: '친절한',
        value: 600.7
      },
      {
        name: '벌레가 없는',
        value: 100.7
    },
    {
        name: '근교',
        value: 200.1
      }]
  }]
});
