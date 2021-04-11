export const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

// 上海市示范幼儿园、上海市一级幼儿园、上海市二级幼儿园、长宁区示范幼儿园、宝山区示范幼儿园、闵行区示范幼儿园、浦东新区示范幼儿园、新开园、其他
export const schoolType = [
  {
    type: '幼儿园',
    echelon: [
      {
        'label': '市示范',
        'value': '市示范'
      },
      {
        'label': '市一级',
        'value': '市一级'
      },
      {
        'label': '市二级',
        'value': '市二级'
      },
      {
        'label': '区示范',
        'value': '区示范'
      },
      {
        'label': '其他',
        'value': '其他'
      }
    ]
  },
  {
    type: '小学',
    echelon: [{
      'label': '一梯队',
      'value': '一梯队'
    },
    {
      'label': '二梯队',
      'value': '二梯队'
    },
    {
      'label': '三梯队',
      'value': '三梯队'
    },
    {
      'label': '其他',
      'value': '其他'
    }]
  },
  {
    type: '中学',
    echelon: [
      {
        'label': '一梯队',
        'value': '一梯队'
      },
      {
        'label': '二梯队',
        'value': '二梯队'
      },
      {
        'label': '三梯队',
        'value': '三梯队'
      },
      {
        'label': '其他',
        'value': '其他'
      }
    ]
  }]
