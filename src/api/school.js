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
export const shoolType = [
  {
    type: '幼儿园',
    echelon: [{
      'label': '上海市示范幼儿园',
      'value': '上海市示范幼儿园'
    },
    {
      'label': '上海市一级幼儿园',
      'value': '上海市一级幼儿园'
    },
    {
      'label': '上海市二级幼儿园',
      'value': '上海市二级幼儿园'
    },
    {
      'label': '区示范幼儿园',
      'value': '区示范幼儿园'
    },
    {
      'label': '其他',
      'value': '其他'
    }]
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
        'label': '四梯队',
        'value': '四梯队'
      },
      {
        'label': '其他',
        'value': '其他'
      }
    ]
  }, {
    type: '一贯制'
  }]

export function schoolOptions () {
  return Object.keys(schoolDetail).map(e => { return { label: e, value: e } })
}

export const schoolDetail = {
  '上海音乐学院实验学校': {
    'schoolName': '上海音乐学院实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '一梯队'
  },
  '上海市静安区教育学院附属学校': {
    'schoolName': '上海市静安区教育学院附属学校',
    'schoolType': '一贯制',
    'echelonPerformance': '一梯队'
  },
  '晋元附校': {
    'schoolName': '晋元附校',
    'schoolType': '一贯制',
    'echelonPerformance': '三梯队'
  },
  '上海市虹口实验学校': {
    'schoolName': '上海市虹口实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '三梯队'
  },
  '川中南校': {
    'schoolName': '川中南校',
    'schoolType': '一贯制',
    'echelonPerformance': '三梯队'
  },
  '西郊学校小学部': {
    'schoolName': '西郊学校小学部',
    'schoolType': '一贯制',
    'echelonPerformance': '三梯队'
  },
  '建青实验学校小学部': {
    'schoolName': '建青实验学校小学部',
    'schoolType': '一贯制',
    'echelonPerformance': '三梯队'
  },
  '上海市长青学校': {
    'schoolName': '上海市长青学校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '中远实验学校': {
    'schoolName': '中远实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '上海市北郊学校': {
    'schoolName': '上海市北郊学校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '上海市师范大学第三附属实验学校': {
    'schoolName': '上海市师范大学第三附属实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '华东师大四附中': {
    'schoolName': '华东师大四附中',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '市实验东校': {
    'schoolName': '市实验东校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '曹杨二中附校': {
    'schoolName': '曹杨二中附校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '华师大二附中前滩学校': {
    'schoolName': '华师大二附中前滩学校',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '洋泾菊园': {
    'schoolName': '洋泾菊园',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '开元学校小学部': {
    'schoolName': '开元学校小学部',
    'schoolType': '一贯制',
    'echelonPerformance': '二梯队'
  },
  '子长学校': {
    'schoolName': '子长学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '明星学校': {
    'schoolName': '明星学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '万里城实验学校': {
    'schoolName': '万里城实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '明翔实验学校': {
    'schoolName': '明翔实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '三墩学校': {
    'schoolName': '三墩学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '东海学校': {
    'schoolName': '东海学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区上海大学附属中学实验学校': {
    'schoolName': '宝山区上海大学附属中学实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区共富实验学校': {
    'schoolName': '宝山区共富实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '东陆学校[东陆校区]': {
    'schoolName': '东陆学校[东陆校区]',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上外尚阳外国语学校': {
    'schoolName': '上外尚阳外国语学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区庙行实验学校': {
    'schoolName': '宝山区庙行实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区教育学院实验学校': {
    'schoolName': '宝山区教育学院实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '曹杨附校': {
    'schoolName': '曹杨附校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区新民实验学校': {
    'schoolName': '宝山区新民实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海三泉学校': {
    'schoolName': '上海三泉学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '今日学校': {
    'schoolName': '今日学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '黄教院附属中山学校': {
    'schoolName': '黄教院附属中山学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '航头学校[鹤永路校区]': {
    'schoolName': '航头学校[鹤永路校区]',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海大学附属宝山外国语学校': {
    'schoolName': '上海大学附属宝山外国语学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区行知外国语学校': {
    'schoolName': '宝山区行知外国语学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '光新学校': {
    'schoolName': '光新学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '光明学校': {
    'schoolName': '光明学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市位育实验学校': {
    'schoolName': '上海市位育实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区顾村实验学校': {
    'schoolName': '宝山区顾村实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '莘城学校': {
    'schoolName': '莘城学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '万祥学校': {
    'schoolName': '万祥学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宝山区鹿鸣学校': {
    'schoolName': '宝山区鹿鸣学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '三灶学校': {
    'schoolName': '三灶学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海世外教育附属宝山大华实验学校': {
    'schoolName': '上海世外教育附属宝山大华实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海大学附属学校': {
    'schoolName': '上海大学附属学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '宣桥学校': {
    'schoolName': '宣桥学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市华灵学校': {
    'schoolName': '上海市华灵学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市吴淞实验学校': {
    'schoolName': '上海市吴淞实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市宝山实验学校': {
    'schoolName': '上海市宝山实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市宝钢新世纪学校': {
    'schoolName': '上海市宝钢新世纪学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市市光学校': {
    'schoolName': '上海市市光学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市昆明学校': {
    'schoolName': '上海市昆明学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市月浦实验学校': {
    'schoolName': '上海市月浦实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市育鹰学校': {
    'schoolName': '上海市育鹰学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市虹口区霍山路小学': {
    'schoolName': '上海市虹口区霍山路小学',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市行知中学附属宝山实验学校': {
    'schoolName': '上海市行知中学附属宝山实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市黄兴学校': {
    'schoolName': '上海市黄兴学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市天馨学校': {
    'schoolName': '上海市天馨学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海师范大学附属第二实验学校': {
    'schoolName': '上海师范大学附属第二实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市宜川中学附属学校': {
    'schoolName': '上海市宜川中学附属学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海戏剧学院附属静安学校': {
    'schoolName': '上海戏剧学院附属静安学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '区教院附校': {
    'schoolName': '区教院附校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '下沙学校': {
    'schoolName': '下沙学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '华东师大附属外国语实验学校': {
    'schoolName': '华东师大附属外国语实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '江宁学校': {
    'schoolName': '江宁学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '华东师范大学宝山实验学校': {
    'schoolName': '华东师范大学宝山实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '华漕学校': {
    'schoolName': '华漕学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '南汇实验学校': {
    'schoolName': '南汇实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '古美学校': {
    'schoolName': '古美学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '应昌期围棋学校': {
    'schoolName': '应昌期围棋学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '康城学校': {
    'schoolName': '康城学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市市东实验学校': {
    'schoolName': '上海市市东实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '毓秀学校': {
    'schoolName': '毓秀学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '沙田学校': {
    'schoolName': '沙田学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市静安区大宁国际学校': {
    'schoolName': '上海市静安区大宁国际学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '福山实验学校': {
    'schoolName': '福山实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '秋萍学校': {
    'schoolName': '秋萍学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '纪王学校': {
    'schoolName': '纪王学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '绿川学校': {
    'schoolName': '绿川学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '育才学校': {
    'schoolName': '育才学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '航头学校[兴城路校区]': {
    'schoolName': '航头学校[兴城路校区]',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '诸翟小学': {
    'schoolName': '诸翟小学',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '莘光学校': {
    'schoolName': '莘光学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '洛川学校': {
    'schoolName': '洛川学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '马桥强恕学校': {
    'schoolName': '马桥强恕学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '黄浦学校': {
    'schoolName': '黄浦学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '黄路学校': {
    'schoolName': '黄路学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海师范大学康城实验学校': {
    'schoolName': '上海师范大学康城实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '金汇实验学校': {
    'schoolName': '金汇实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海师范大学附属经纬实验学校': {
    'schoolName': '上海师范大学附属经纬实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '君莲学校': {
    'schoolName': '君莲学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '铜川学校': {
    'schoolName': '铜川学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市杨泰实验学校': {
    'schoolName': '上海市杨泰实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '周浦实验学校[瑞安校区]': {
    'schoolName': '周浦实验学校[瑞安校区]',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海理工大学附属普陀实验学校': {
    'schoolName': '上海理工大学附属普陀实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市爱国学校': {
    'schoolName': '上海市爱国学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '文来实验学校': {
    'schoolName': '文来实验学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '文达学校': {
    'schoolName': '文达学校',
    'schoolType': '一贯制',
    'echelonPerformance': '其他'
  },
  '上海市位育初级中学': {
    'schoolName': '上海市位育初级中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '格致初级中学': {
    'schoolName': '格致初级中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '梅陇中学': {
    'schoolName': '梅陇中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '上海市市北初级中学': {
    'schoolName': '上海市市北初级中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '上海市市西初级中学': {
    'schoolName': '上海市市西初级中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '西延安中学': {
    'schoolName': '西延安中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '延安初中': {
    'schoolName': '延安初中',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '建平西校[华城校区]': {
    'schoolName': '建平西校[华城校区]',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '建平西校[大唐校区]': {
    'schoolName': '建平西校[大唐校区]',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '张江集团中学': {
    'schoolName': '张江集团中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '向明初级中学': {
    'schoolName': '向明初级中学',
    'schoolType': '中学',
    'echelonPerformance': '一梯队'
  },
  '上海市育才初级中学': {
    'schoolName': '上海市育才初级中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯度'
  },
  '娄山中学': {
    'schoolName': '娄山中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '闵行第三中学': {
    'schoolName': '闵行第三中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市钟山初级中学': {
    'schoolName': '上海市钟山初级中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '普陀教育学院附属中学': {
    'schoolName': '普陀教育学院附属中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '颛桥中学': {
    'schoolName': '颛桥中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '曹杨中学': {
    'schoolName': '曹杨中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '五三中学': {
    'schoolName': '五三中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '致远中学': {
    'schoolName': '致远中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '鹤北初级中学': {
    'schoolName': '鹤北初级中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海交通大学附属第二中学': {
    'schoolName': '上海交通大学附属第二中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海外国语大学苏河湾实验中学（电脑派位）': {
    'schoolName': '上海外国语大学苏河湾实验中学（电脑派位）',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市五四中学': {
    'schoolName': '上海市五四中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '尚文中学': {
    'schoolName': '尚文中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '川中南校[南校区]': {
    'schoolName': '川中南校[南校区]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '市十中学': {
    'schoolName': '市十中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市实验学校西校': {
    'schoolName': '上海市实验学校西校',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '华东理工大学附属中学': {
    'schoolName': '华东理工大学附属中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '华夏西校[华夏二路校区]': {
    'schoolName': '华夏西校[华夏二路校区]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '南汇二中[东校区]': {
    'schoolName': '南汇二中[东校区]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '南汇二中[总校]': {
    'schoolName': '南汇二中[总校]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '南汇四中[北校区]': {
    'schoolName': '南汇四中[北校区]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '南汇四中[南校区]': {
    'schoolName': '南汇四中[南校区]',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市南洋初级中学（对口）': {
    'schoolName': '上海市南洋初级中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市师范大学第三附属实验学校(对口）': {
    'schoolName': '上海市师范大学第三附属实验学校(对口）',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '浦江第一中学': {
    'schoolName': '浦江第一中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海师大附中附属龙华中学': {
    'schoolName': '上海师大附中附属龙华中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '清流中学': {
    'schoolName': '清流中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市曲阳第二中学': {
    'schoolName': '上海市曲阳第二中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '教育学院附属友爱实验中学': {
    'schoolName': '教育学院附属友爱实验中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '敬业初级中学': {
    'schoolName': '敬业初级中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市第一中学': {
    'schoolName': '上海市第一中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '复旦初中': {
    'schoolName': '复旦初中',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市第五十四中学': {
    'schoolName': '上海市第五十四中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市民立中学': {
    'schoolName': '上海市民立中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '上海市江湾初级中学': {
    'schoolName': '上海市江湾初级中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '天山中学': {
    'schoolName': '天山中学',
    'schoolType': '中学',
    'echelonPerformance': '三梯队'
  },
  '七宝第二中学': {
    'schoolName': '七宝第二中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '东方中学': {
    'schoolName': '东方中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '青浦区实验中学': {
    'schoolName': '青浦区实验中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '青浦区第一中学': {
    'schoolName': '青浦区第一中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市中国中学': {
    'schoolName': '上海市中国中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市南洋模范初级中学': {
    'schoolName': '上海市南洋模范初级中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市第四中学': {
    'schoolName': '上海市第四中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市园南中学': {
    'schoolName': '上海市园南中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市风华初级中学': {
    'schoolName': '上海市风华初级中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市宝山区求真中学': {
    'schoolName': '上海市宝山区求真中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '华东师范大学第二附属中学附属初级中学': {
    'schoolName': '华东师范大学第二附属中学附属初级中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '市三女初': {
    'schoolName': '市三女初',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇中学总校（含北校区）': {
    'schoolName': '上海市徐汇中学总校（含北校区）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇中学（南校）': {
    'schoolName': '上海市徐汇中学（南校）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '南汇一中': {
    'schoolName': '南汇一中',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '铁岭中学': {
    'schoolName': '铁岭中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市中国中学（对口）': {
    'schoolName': '上海市中国中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '进才北校': {
    'schoolName': '进才北校',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市园南中学（对口）': {
    'schoolName': '上海市园南中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '进才实验中学': {
    'schoolName': '进才实验中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇中学（南校）（对口）': {
    'schoolName': '上海市徐汇中学（南校）（对口）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '建平实验中学[地杰校区]': {
    'schoolName': '建平实验中学[地杰校区]',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '建平实验中学[张江校区]': {
    'schoolName': '建平实验中学[张江校区]',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区教育学院附属实验中学': {
    'schoolName': '上海市徐汇区教育学院附属实验中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '卢湾中学': {
    'schoolName': '卢湾中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '同济二附中': {
    'schoolName': '同济二附中',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '同济大学附属七一中学': {
    'schoolName': '同济大学附属七一中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市田林第三中学': {
    'schoolName': '上海市田林第三中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市田林第三中学（电脑派位）': {
    'schoolName': '上海市田林第三中学（电脑派位）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市第二初级中学（电脑派位）': {
    'schoolName': '上海市第二初级中学（电脑派位）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '上海市第四中学（电脑派位）': {
    'schoolName': '上海市第四中学（电脑派位）',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '大同初级中学': {
    'schoolName': '大同初级中学',
    'schoolType': '中学',
    'echelonPerformance': '二梯队'
  },
  '新港中学': {
    'schoolName': '新港中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '七宝中学附属闵行鑫都实验中学': {
    'schoolName': '七宝中学附属闵行鑫都实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上虹中学': {
    'schoolName': '上虹中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '七宝实验中学': {
    'schoolName': '七宝实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '立信会计金融学院附属学校[证大校区]': {
    'schoolName': '立信会计金融学院附属学校[证大校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '立信会计金融学院附属学校[高行校区]': {
    'schoolName': '立信会计金融学院附属学校[高行校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '七宝第三中学': {
    'schoolName': '七宝第三中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '下沙学校[中学部]': {
    'schoolName': '下沙学校[中学部]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '姚连生中学': {
    'schoolName': '姚连生中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '施湾中学': {
    'schoolName': '施湾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '世外尚美中学': {
    'schoolName': '世外尚美中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '竹园中学[益江校区]': {
    'schoolName': '竹园中学[益江校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '竹园中学[高行校区]': {
    'schoolName': '竹园中学[高行校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '闵行第四中学': {
    'schoolName': '闵行第四中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '孙桥中学': {
    'schoolName': '孙桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '陆行北校': {
    'schoolName': '陆行北校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '陆行南校': {
    'schoolName': '陆行南校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东昌东校': {
    'schoolName': '东昌东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东昌南校[张江校区]': {
    'schoolName': '东昌南校[张江校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东昌南校[潍坊校区]': {
    'schoolName': '东昌南校[潍坊校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东林中学': {
    'schoolName': '东林中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市虹口教育学院实验中学': {
    'schoolName': '上海市虹口教育学院实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东沟中学': {
    'schoolName': '东沟中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '三林东校': {
    'schoolName': '三林东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '宜川中学附属学校': {
    'schoolName': '宜川中学附属学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '三林北校': {
    'schoolName': '三林北校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '鞍山初级中学': {
    'schoolName': '鞍山初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市行知实验中学': {
    'schoolName': '上海市行知实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '鞍山实验中学': {
    'schoolName': '鞍山实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市长桥中学': {
    'schoolName': '上海市长桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '东辽阳中学': {
    'schoolName': '东辽阳中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '顾路中学[民冬校区]': {
    'schoolName': '顾路中学[民冬校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '三灶实验中学': {
    'schoolName': '三灶实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市长江第二中学': {
    'schoolName': '上海市长江第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '顾路中学[金钻校区]': {
    'schoolName': '顾路中学[金钻校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '三门中学': {
    'schoolName': '三门中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '香山中学': {
    'schoolName': '香山中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上南东校': {
    'schoolName': '上南东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '罗山中学': {
    'schoolName': '罗山中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上南北校': {
    'schoolName': '上南北校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '临港一中': {
    'schoolName': '临港一中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上南南校': {
    'schoolName': '上南南校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '临港实验中学': {
    'schoolName': '临港实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '罗阳中学': {
    'schoolName': '罗阳中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '高东中学': {
    'schoolName': '高东中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上外附属大境初级中学': {
    'schoolName': '上外附属大境初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '曹行中学': {
    'schoolName': '曹行中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上师大附属南陈路九年一贯制学校（暂名）': {
    'schoolName': '上师大附属南陈路九年一贯制学校（暂名）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '二十五中学': {
    'schoolName': '二十五中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上师大附属宝山实验学校（暂名）': {
    'schoolName': '上师大附属宝山实验学校（暂名）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '育人中学': {
    'schoolName': '育人中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '高桥实验中学': {
    'schoolName': '高桥实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '育民中学': {
    'schoolName': '育民中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '高行中学': {
    'schoolName': '高行中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海世外教育附属浦江外国语': {
    'schoolName': '上海世外教育附属浦江外国语',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海中医药大学附属闵行晶城中学': {
    'schoolName': '上海中医药大学附属闵行晶城中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '航华中学': {
    'schoolName': '航华中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '航华第二中学': {
    'schoolName': '航华第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '黄楼中学': {
    'schoolName': '黄楼中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '黄浦区教育校园附属中山学校': {
    'schoolName': '黄浦区教育校园附属中山学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '侨光中学[妙川路校区]': {
    'schoolName': '侨光中学[妙川路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '侨光中学[新德路校区]': {
    'schoolName': '侨光中学[新德路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '杨园中学': {
    'schoolName': '杨园中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '航头学校[学诚路校区]': {
    'schoolName': '航头学校[学诚路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '傅雷中学[关岳路校区]': {
    'schoolName': '傅雷中学[关岳路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '傅雷中学[瑞和路校区]': {
    'schoolName': '傅雷中学[瑞和路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '杨思中学': {
    'schoolName': '杨思中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '储能中学': {
    'schoolName': '储能中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市三泉学校': {
    'schoolName': '上海市三泉学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '杨浦初级中学': {
    'schoolName': '杨浦初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市丰镇中学': {
    'schoolName': '上海市丰镇中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '杨浦教育学院附属中学': {
    'schoolName': '杨浦教育学院附属中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '光明初级中学': {
    'schoolName': '光明初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '龙柏中学': {
    'schoolName': '龙柏中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '龙茗中学': {
    'schoolName': '龙茗中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '六团中学': {
    'schoolName': '六团中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '龚路中学': {
    'schoolName': '龚路中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市保德中学': {
    'schoolName': '上海市保德中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市刘行新华实验学校': {
    'schoolName': '上海市刘行新华实验学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市北虹初级中学': {
    'schoolName': '上海市北虹初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '六灶中学': {
    'schoolName': '六灶中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '桃浦中学': {
    'schoolName': '桃浦中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '莘闵中学春申校区': {
    'schoolName': '莘闵中学春申校区',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '莘闵中学莘闵校区': {
    'schoolName': '莘闵中学莘闵校区',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '兴业中学': {
    'schoolName': '兴业中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '兴陇中学': {
    'schoolName': '兴陇中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市华东模范中学': {
    'schoolName': '上海市华东模范中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '凌桥中学': {
    'schoolName': '凌桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '模范中学': {
    'schoolName': '模范中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '凤溪中学': {
    'schoolName': '凤溪中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '模范中学东校': {
    'schoolName': '模范中学东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市向东中学': {
    'schoolName': '上海市向东中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '模范实验中学': {
    'schoolName': '模范实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '蔡路中学': {
    'schoolName': '蔡路中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市吴淞初级中学': {
    'schoolName': '上海市吴淞初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '包头中学': {
    'schoolName': '包头中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市吴淞第二中学': {
    'schoolName': '上海市吴淞第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市呼玛中学': {
    'schoolName': '上海市呼玛中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市培明中学': {
    'schoolName': '上海市培明中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市复兴实验中学': {
    'schoolName': '上海市复兴实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '比乐中学': {
    'schoolName': '比乐中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市大华中学': {
    'schoolName': '上海市大华中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '北桥中学': {
    'schoolName': '北桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市大场中学': {
    'schoolName': '上海市大场中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '北海中学': {
    'schoolName': '北海中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市紫阳中学（对口）': {
    'schoolName': '上海市紫阳中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '北蔡中学': {
    'schoolName': '北蔡中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市长桥中学（对口）': {
    'schoolName': '上海市长桥中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区乐之中学': {
    'schoolName': '上海市宝山区乐之中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市龙苑中学（对口）': {
    'schoolName': '上海市龙苑中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区共富实验学校': {
    'schoolName': '上海市宝山区共富实验学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区庙行实验学校': {
    'schoolName': '上海市宝山区庙行实验学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '十五中学': {
    'schoolName': '十五中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区教育学院实验学校': {
    'schoolName': '上海市宝山区教育学院实验学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区教育学院附属中学': {
    'schoolName': '上海市宝山区教育学院附属中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区新民实验学校': {
    'schoolName': '上海市宝山区新民实验学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '崧淀中学': {
    'schoolName': '崧淀中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区罗店二中': {
    'schoolName': '上海市宝山区罗店二中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区美兰湖中学': {
    'schoolName': '上海市宝山区美兰湖中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '华东师范大学第一附属初级中学': {
    'schoolName': '华东师范大学第一附属初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区陈伯吹中学': {
    'schoolName': '上海市宝山区陈伯吹中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区高境镇第三中学': {
    'schoolName': '上海市宝山区高境镇第三中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '复旦大学第二附属学校': {
    'schoolName': '复旦大学第二附属学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市宝山区高境镇第四中学': {
    'schoolName': '上海市宝山区高境镇第四中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '江镇中学': {
    'schoolName': '江镇中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '华东师范大学附属杨行中学': {
    'schoolName': '华东师范大学附属杨行中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '市八初级中学': {
    'schoolName': '市八初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '沈巷中学': {
    'schoolName': '沈巷中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '虹口教育学院附属中学': {
    'schoolName': '虹口教育学院附属中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市闸北第八中学': {
    'schoolName': '上海市闸北第八中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '市南中学': {
    'schoolName': '市南中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市零陵中学': {
    'schoolName': '上海市零陵中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市零陵中学（电脑派位）': {
    'schoolName': '上海市零陵中学（电脑派位）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '市实验学校南校': {
    'schoolName': '市实验学校南校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '虹桥中学': {
    'schoolName': '虹桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '御澜湾学校': {
    'schoolName': '御澜湾学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市青云中学': {
    'schoolName': '上海市青云中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '师资培训中心附属闵行实验中学': {
    'schoolName': '师资培训中心附属闵行实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市岭南中学': {
    'schoolName': '上海市岭南中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '沪新中学': {
    'schoolName': '沪新中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '华政附中': {
    'schoolName': '华政附中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '华新中学': {
    'schoolName': '华新中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '泥城中学': {
    'schoolName': '泥城中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '华林中学': {
    'schoolName': '华林中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '泸定中学': {
    'schoolName': '泸定中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市静安区实验中学': {
    'schoolName': '上海市静安区实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '泾南中学': {
    'schoolName': '泾南中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市彭浦第三中学': {
    'schoolName': '上海市彭浦第三中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市静安区市北初级中学北校': {
    'schoolName': '上海市静安区市北初级中学北校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '洋泾东校': {
    'schoolName': '洋泾东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市彭浦第四中学': {
    'schoolName': '上海市彭浦第四中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '洋泾南校[三彩路校区]': {
    'schoolName': '洋泾南校[三彩路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '洋泾南校[龙阳路校区]': {
    'schoolName': '洋泾南校[龙阳路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '南汇三中': {
    'schoolName': '南汇三中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '豫才中学': {
    'schoolName': '豫才中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '洪山中学': {
    'schoolName': '洪山中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '洵阳中学': {
    'schoolName': '洵阳中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '南汇五中': {
    'schoolName': '南汇五中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '辽阳中学': {
    'schoolName': '辽阳中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '延吉第二初级中学': {
    'schoolName': '延吉第二初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '进修学院附属中学': {
    'schoolName': '进修学院附属中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦东外国语东校': {
    'schoolName': '浦东外国语东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '进才东校': {
    'schoolName': '进才东校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市向东中学（对口）': {
    'schoolName': '上海市向东中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '延安实验初中': {
    'schoolName': '延安实验初中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦兴中学': {
    'schoolName': '浦兴中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '进才南校[航春路校区]': {
    'schoolName': '进才南校[航春路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '延河中学': {
    'schoolName': '延河中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '进才南校[鹤韵路校区]': {
    'schoolName': '进才南校[鹤韵路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '建平中学南校': {
    'schoolName': '建平中学南校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市康健外国语实验中学（对口）': {
    'schoolName': '上海市康健外国语实验中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '进才实验中学南校': {
    'schoolName': '进才实验中学南校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市梅园中学（对口）': {
    'schoolName': '上海市梅园中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市汾阳中学（对口）': {
    'schoolName': '上海市汾阳中学（对口）',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦江第三中学': {
    'schoolName': '浦江第三中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦江第二中学': {
    'schoolName': '浦江第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '历城中学': {
    'schoolName': '历城中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '重固中学': {
    'schoolName': '重固中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '建平香梅': {
    'schoolName': '建平香梅',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦泾中学': {
    'schoolName': '浦泾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '建设初级中学': {
    'schoolName': '建设初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '浦航第二中学': {
    'schoolName': '浦航第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市高境第一中学': {
    'schoolName': '上海市高境第一中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市鲁迅初级中学': {
    'schoolName': '上海市鲁迅初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '金川中学': {
    'schoolName': '金川中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '开元学校': {
    'schoolName': '开元学校',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '金杨中学': {
    'schoolName': '金杨中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '合庆中学': {
    'schoolName': '合庆中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '张江实验中学': {
    'schoolName': '张江实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '同济初级中学': {
    'schoolName': '同济初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '金泽中学': {
    'schoolName': '金泽中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '同济第二初级中学': {
    'schoolName': '同济第二初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '清华中学': {
    'schoolName': '清华中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '彭镇中学': {
    'schoolName': '彭镇中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市新中初级中学': {
    'schoolName': '上海市新中初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海师范大学附属闵行第三中学': {
    'schoolName': '上海师范大学附属闵行第三中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '徐泾中学': {
    'schoolName': '徐泾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '金陵中学': {
    'schoolName': '金陵中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '吴泾中学': {
    'schoolName': '吴泾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市月浦中学': {
    'schoolName': '上海市月浦中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '吴迅中学[初中部]': {
    'schoolName': '吴迅中学[初中部]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '澧溪中学[周阳路校区]': {
    'schoolName': '澧溪中学[周阳路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '澧溪中学[康沈路校区]': {
    'schoolName': '澧溪中学[康沈路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市朝阳中学': {
    'schoolName': '上海市朝阳中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海是顾村中学': {
    'schoolName': '上海是顾村中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '周浦实验学校[瑞阳校区]': {
    'schoolName': '周浦实验学校[瑞阳校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '怒江中学': {
    'schoolName': '怒江中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '王港中学[宏雅校区]': {
    'schoolName': '王港中学[宏雅校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '王港中学[龙东路校区]': {
    'schoolName': '王港中学[龙东路校区]',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '思源中学': {
    'schoolName': '思源中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '珠溪中学': {
    'schoolName': '珠溪中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '长岛中学': {
    'schoolName': '长岛中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '唐镇中学': {
    'schoolName': '唐镇中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '长征中学': {
    'schoolName': '长征中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '田园外国语中学': {
    'schoolName': '田园外国语中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '惠民中学': {
    'schoolName': '惠民中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海理工大学附属初级中学': {
    'schoolName': '上海理工大学附属初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '懿德中学': {
    'schoolName': '懿德中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '闵行中学附属实验中学': {
    'schoolName': '闵行中学附属实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市海南中学': {
    'schoolName': '上海市海南中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市海滨第二中学': {
    'schoolName': '上海市海滨第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '国和中学': {
    'schoolName': '国和中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '控江初级中学': {
    'schoolName': '控江初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市淞谊中学': {
    'schoolName': '上海市淞谊中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市澄衷初级中学': {
    'schoolName': '上海市澄衷初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '白鹤中学': {
    'schoolName': '白鹤中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市田林中学': {
    'schoolName': '上海市田林中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '教育学会附属清河湾中学': {
    'schoolName': '教育学会附属清河湾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '教育学院实验中学': {
    'schoolName': '教育学院实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市田林第二中学': {
    'schoolName': '上海市田林第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市盛桥中学': {
    'schoolName': '上海市盛桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '复旦万科实验中学': {
    'schoolName': '复旦万科实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '真北中学': {
    'schoolName': '真北中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市第五十二中学': {
    'schoolName': '上海市第五十二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '复旦实验中学': {
    'schoolName': '复旦实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '新云台中学': {
    'schoolName': '新云台中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '新场实验中学': {
    'schoolName': '新场实验中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市继光初级中学': {
    'schoolName': '上海市继光初级中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市泗塘中学': {
    'schoolName': '上海市泗塘中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市罗南中学': {
    'schoolName': '上海市罗南中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市泗塘第二中学': {
    'schoolName': '上海市泗塘第二中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市罗店中学': {
    'schoolName': '上海市罗店中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '大团中学': {
    'schoolName': '大团中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '新大桥中学': {
    'schoolName': '新大桥中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市虎林中学': {
    'schoolName': '上海市虎林中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '新杨中学': {
    'schoolName': '新杨中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '天山二中': {
    'schoolName': '天山二中',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '新泾中学': {
    'schoolName': '新泾中学',
    'schoolType': '中学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区广灵路小学': {
    'schoolName': '上海市虹口区广灵路小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '七宝镇明强小学': {
    'schoolName': '七宝镇明强小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '七宝镇明强小学西校区': {
    'schoolName': '七宝镇明强小学西校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市虹口区第三中心小学': {
    'schoolName': '上海市虹口区第三中心小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市虹口区第四中心小学': {
    'schoolName': '上海市虹口区第四中心小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '明珠小学[A区]': {
    'schoolName': '明珠小学[A区]',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '明珠小学[B区]': {
    'schoolName': '明珠小学[B区]',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '明珠小学[C区]': {
    'schoolName': '明珠小学[C区]',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '青浦区实验小学': {
    'schoolName': '青浦区实验小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上外黄浦外国语': {
    'schoolName': '上外黄浦外国语',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '宝山区第一中心小学': {
    'schoolName': '宝山区第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '六师附小[羽山校区]': {
    'schoolName': '六师附小[羽山校区]',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '六师附小[芳菲校区]': {
    'schoolName': '六师附小[芳菲校区]',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '蓬莱路第二小学': {
    'schoolName': '蓬莱路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '江苏路第五小学昭华东路校区': {
    'schoolName': '江苏路第五小学昭华东路校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '江苏路第五小学昭华阳路校区': {
    'schoolName': '江苏路第五小学昭华阳路校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '江苏路第五小学昭长宁路校区': {
    'schoolName': '江苏路第五小学昭长宁路校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '华东师范大学附属小学': {
    'schoolName': '华东师范大学附属小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市实验小学': {
    'schoolName': '上海市实验小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '逸夫小学': {
    'schoolName': '逸夫小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市静安区第一中心小学': {
    'schoolName': '上海市静安区第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区向阳小学': {
    'schoolName': '上海市徐汇区向阳小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市静安区闸北实验小学': {
    'schoolName': '上海市静安区闸北实验小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区建襄小学': {
    'schoolName': '上海市徐汇区建襄小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市静安区闸北实验小学明德校区': {
    'schoolName': '上海市静安区闸北实验小学明德校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '卢湾二中心小学': {
    'schoolName': '卢湾二中心小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区汇师小学（南丹校区）': {
    'schoolName': '上海市徐汇区汇师小学（南丹校区）',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区汇师小学（南站校区）': {
    'schoolName': '上海市徐汇区汇师小学（南站校区）',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区高安路第一小学（华展校区）': {
    'schoolName': '上海市徐汇区高安路第一小学（华展校区）',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市徐汇区高安路第一小学（宛平校区）': {
    'schoolName': '上海市徐汇区高安路第一小学（宛平校区）',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '愚一小学向红分校': {
    'schoolName': '愚一小学向红分校',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '愚园路第一小学': {
    'schoolName': '愚园路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市杨浦区打虎山路第一小学': {
    'schoolName': '上海市杨浦区打虎山路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市杨浦区控江二村小学': {
    'schoolName': '上海市杨浦区控江二村小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市第一师范学校附属小学': {
    'schoolName': '上海市第一师范学校附属小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市第二师范学校附属小学': {
    'schoolName': '上海市第二师范学校附属小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '闵行区实验小学': {
    'schoolName': '闵行区实验小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '闵行区实验小学春城校区': {
    'schoolName': '闵行区实验小学春城校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '闵行区实验小学景城校区': {
    'schoolName': '闵行区实验小学景城校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '闵行区实验小学畹町校区': {
    'schoolName': '闵行区实验小学畹町校区',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '福山外国语小学': {
    'schoolName': '福山外国语小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '福山花园外国语小学': {
    'schoolName': '福山花园外国语小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '福山证大外国语小学': {
    'schoolName': '福山证大外国语小学',
    'schoolType': '小学',
    'echelonPerformance': '一梯队'
  },
  '上海市虹口区凉城第三小学': {
    'schoolName': '上海市虹口区凉城第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市虹口区四川北路第一小学': {
    'schoolName': '上海市虹口区四川北路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '新虹桥小学': {
    'schoolName': '新虹桥小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市虹口区外国语第一小学': {
    'schoolName': '上海市虹口区外国语第一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '威宁小学': {
    'schoolName': '威宁小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '日新实验小学': {
    'schoolName': '日新实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '万源城协和双语学校': {
    'schoolName': '万源城协和双语学校',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市虹口区第六中心小学': {
    'schoolName': '上海市虹口区第六中心小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '东方小学[懿德校区]': {
    'schoolName': '东方小学[懿德校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '东方小学[蓝村校区]': {
    'schoolName': '东方小学[蓝村校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '三林实验小学': {
    'schoolName': '三林实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区嘉华小学': {
    'schoolName': '宝山区嘉华小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区大华小学': {
    'schoolName': '宝山区大华小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '曹村六小': {
    'schoolName': '曹村六小',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上南二村小学': {
    'schoolName': '上南二村小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上南实小[三林校区]': {
    'schoolName': '上南实小[三林校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上南实小[昌里校区]': {
    'schoolName': '上南实小[昌里校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区杨行中心校': {
    'schoolName': '宝山区杨行中心校',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区江湾中心校': {
    'schoolName': '宝山区江湾中心校',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海交通大学附属实验小学': {
    'schoolName': '上海交通大学附属实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海交通大学附属小学': {
    'schoolName': '上海交通大学附属小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区第二中心小学': {
    'schoolName': '宝山区第二中心小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区虎林路第三小学': {
    'schoolName': '宝山区虎林路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区行知小学': {
    'schoolName': '宝山区行知小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '龙柏第一小学': {
    'schoolName': '龙柏第一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '龚路小学': {
    'schoolName': '龚路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '宝山区高境科创实验小学': {
    'schoolName': '宝山区高境科创实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '莘松小学': {
    'schoolName': '莘松小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市华东师大一附中实验小学': {
    'schoolName': '上海市华东师大一附中实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '莲溪小学': {
    'schoolName': '莲溪小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '北京东路小学': {
    'schoolName': '北京东路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '尚博实验小学[昌里校区]': {
    'schoolName': '尚博实验小学[昌里校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '尚博实验小学[湾流域校区]': {
    'schoolName': '尚博实验小学[湾流域校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '北蔡小学': {
    'schoolName': '北蔡小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '巨鹿路第一小学': {
    'schoolName': '巨鹿路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市闸北田家炳小学': {
    'schoolName': '上海市闸北田家炳小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '华东师范大学附属紫竹小学': {
    'schoolName': '华东师范大学附属紫竹小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '庆华小学': {
    'schoolName': '庆华小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市实验学校附属小学': {
    'schoolName': '上海市实验学校附属小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '华东理工大学附属小学': {
    'schoolName': '华东理工大学附属小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '虹桥中心小学': {
    'schoolName': '虹桥中心小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '沪太一小': {
    'schoolName': '沪太一小',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区中山北路小学': {
    'schoolName': '上海市静安区中山北路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '法华镇路第三小学': {
    'schoolName': '法华镇路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '裘锦秋实验学校': {
    'schoolName': '裘锦秋实验学校',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '洵阳路小学': {
    'schoolName': '洵阳路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区威海路第三小学': {
    'schoolName': '上海市静安区威海路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '观澜小学[川周校区]': {
    'schoolName': '观澜小学[川周校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '观澜小学[新川校区]': {
    'schoolName': '观澜小学[新川校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区市西小学': {
    'schoolName': '上海市静安区市西小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '浦东南路小学': {
    'schoolName': '浦东南路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区第二中心小学': {
    'schoolName': '上海市静安区第二中心小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市徐汇区启新小学': {
    'schoolName': '上海市徐汇区启新小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区第四中心小学': {
    'schoolName': '上海市静安区第四中心小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区西康路第三小学': {
    'schoolName': '上海市静安区西康路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '南码头小学': {
    'schoolName': '南码头小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市徐汇区康宁科技实验小学': {
    'schoolName': '上海市徐汇区康宁科技实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市徐汇区徐汇实验小学': {
    'schoolName': '上海市徐汇区徐汇实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市徐汇区教育学院附属实验小学': {
    'schoolName': '上海市徐汇区教育学院附属实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安区陈鹤琴小学': {
    'schoolName': '上海市静安区陈鹤琴小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安实验小学': {
    'schoolName': '上海市静安实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市静安小学': {
    'schoolName': '上海市静安小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '开元小学': {
    'schoolName': '开元小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '张江高科实验小学[藿香校区]': {
    'schoolName': '张江高科实验小学[藿香校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '张江高科实验小学[香楠校区]': {
    'schoolName': '张江高科实验小学[香楠校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '御桥小学[御山校区]': {
    'schoolName': '御桥小学[御山校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '御桥小学[高青校区]': {
    'schoolName': '御桥小学[高青校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '澧溪小学': {
    'schoolName': '澧溪小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区中原路小学': {
    'schoolName': '上海市杨浦区中原路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区二联小学': {
    'schoolName': '上海市杨浦区二联小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '玉屏南路小学': {
    'schoolName': '玉屏南路小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区五角场小学': {
    'schoolName': '上海市杨浦区五角场小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区六一小学': {
    'schoolName': '上海市杨浦区六一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区内江路第二小学': {
    'schoolName': '上海市杨浦区内江路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区凤城新村小学': {
    'schoolName': '上海市杨浦区凤城新村小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区同济小学': {
    'schoolName': '上海市杨浦区同济小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区同济小学（1230弄）': {
    'schoolName': '上海市杨浦区同济小学（1230弄）',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区回民小学': {
    'schoolName': '上海市杨浦区回民小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '惠南小学': {
    'schoolName': '惠南小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区平凉路第三小学': {
    'schoolName': '上海市杨浦区平凉路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '园西小学[南桥校区]': {
    'schoolName': '园西小学[南桥校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '园西小学[新德校区]': {
    'schoolName': '园西小学[新德校区]',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区怀德路第一小学': {
    'schoolName': '上海市杨浦区怀德路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区政立路第二小学': {
    'schoolName': '上海市杨浦区政立路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区教育学院实验小学': {
    'schoolName': '上海市杨浦区教育学院实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市杨浦区许昌路第五小学': {
    'schoolName': '上海市杨浦区许昌路第五小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '复旦小学': {
    'schoolName': '复旦小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '外高桥实验小学': {
    'schoolName': '外高桥实验小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '新梅小学': {
    'schoolName': '新梅小学',
    'schoolType': '小学',
    'echelonPerformance': '三梯队'
  },
  '上海市虹口区曲阳第三小学': {
    'schoolName': '上海市虹口区曲阳第三小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '昌邑小学[大华校区]': {
    'schoolName': '昌邑小学[大华校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '昌邑小学[陆家嘴校区]': {
    'schoolName': '昌邑小学[陆家嘴校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市虹口区第一中心小学': {
    'schoolName': '上海市虹口区第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '竹园小学[张杨校区]': {
    'schoolName': '竹园小学[张杨校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '竹园小学[沪东校区]': {
    'schoolName': '竹园小学[沪东校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '竹园小学[龙阳校区]': {
    'schoolName': '竹园小学[龙阳校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市虹口区红旗小学': {
    'schoolName': '上海市虹口区红旗小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '曹光彪小学': {
    'schoolName': '曹光彪小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '绿苑小学': {
    'schoolName': '绿苑小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '宝山区广育小学': {
    'schoolName': '宝山区广育小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '二中心小学[巨野校区]': {
    'schoolName': '二中心小学[巨野校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '二中心小学[张江校区]': {
    'schoolName': '二中心小学[张江校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '朝春中心小学': {
    'schoolName': '朝春中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '鹤北小学': {
    'schoolName': '鹤北小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海中医药大学附属闵行蔷薇小学': {
    'schoolName': '上海中医药大学附属闵行蔷薇小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海中医药大学附属闵行蔷薇小学晶城校区': {
    'schoolName': '上海中医药大学附属闵行蔷薇小学晶城校区',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '宝山区第三中心小学': {
    'schoolName': '宝山区第三中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '黄浦区第一中心小学': {
    'schoolName': '黄浦区第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '宝山区红星小学': {
    'schoolName': '宝山区红星小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '宝山区虎林路小学': {
    'schoolName': '宝山区虎林路小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '莘庄镇小': {
    'schoolName': '莘庄镇小',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '七宝实验小学': {
    'schoolName': '七宝实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '莘庄镇小南区': {
    'schoolName': '莘庄镇小南区',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '宝山和衷小学': {
    'schoolName': '宝山和衷小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '武宁路小学': {
    'schoolName': '武宁路小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市大宁国际小学': {
    'schoolName': '上海市大宁国际小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海师范大学附属闵行第三小学': {
    'schoolName': '上海师范大学附属闵行第三小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '中北一小': {
    'schoolName': '中北一小',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '江川路小学': {
    'schoolName': '江川路小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '江川路小学北校区': {
    'schoolName': '江川路小学北校区',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '天山第一小学': {
    'schoolName': '天山第一小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区万航渡路小学': {
    'schoolName': '上海市静安区万航渡路小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '华坪小学': {
    'schoolName': '华坪小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '平南小学': {
    'schoolName': '平南小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '平南小学平吉校区': {
    'schoolName': '平南小学平吉校区',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '平阳小学': {
    'schoolName': '平阳小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区彭浦新村第一小学': {
    'schoolName': '上海市静安区彭浦新村第一小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区上海小学': {
    'schoolName': '上海市徐汇区上海小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区东二小学': {
    'schoolName': '上海市徐汇区东二小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区第三中心小学': {
    'schoolName': '上海市静安区第三中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区园南小学': {
    'schoolName': '上海市徐汇区园南小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '浦师附小[东城校区]': {
    'schoolName': '浦师附小[东城校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区康健外国语实验小学': {
    'schoolName': '上海市徐汇区康健外国语实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '浦师附小[潍坊校区]': {
    'schoolName': '浦师附小[潍坊校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '浦师附小[锦绣校区]': {
    'schoolName': '浦师附小[锦绣校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '进才实验小学': {
    'schoolName': '进才实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区闸北第一中心小学': {
    'schoolName': '上海市静安区闸北第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '卢湾一中心小学': {
    'schoolName': '卢湾一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区闸北第三中心小学': {
    'schoolName': '上海市静安区闸北第三中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '适存小学': {
    'schoolName': '适存小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市静安区闸北第二中心小学': {
    'schoolName': '上海市静安区闸北第二中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '建平实验小学[枣庄校区]': {
    'schoolName': '建平实验小学[枣庄校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '卢湾实验小学': {
    'schoolName': '卢湾实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '建平实验小学[金业校区]': {
    'schoolName': '建平实验小学[金业校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区求知小学': {
    'schoolName': '上海市徐汇区求知小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区田林第三小学': {
    'schoolName': '上海市徐汇区田林第三小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '海桐小学': {
    'schoolName': '海桐小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区田林第四小学': {
    'schoolName': '上海市徐汇区田林第四小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市徐汇区第一中心小学': {
    'schoolName': '上海市徐汇区第一中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海师范专科学校附属小学': {
    'schoolName': '上海师范专科学校附属小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海师范大学第一附属小学': {
    'schoolName': '上海师范大学第一附属小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '徽宁路第三小学': {
    'schoolName': '徽宁路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '长宁实验小学': {
    'schoolName': '长宁实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '长征中心小学': {
    'schoolName': '长征中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市杨浦区复旦科技园小学': {
    'schoolName': '上海市杨浦区复旦科技园小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '田园外语实验小学': {
    'schoolName': '田园外语实验小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '田园外语实验小学金都校区': {
    'schoolName': '田园外语实验小学金都校区',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海理工大学附属小学': {
    'schoolName': '上海理工大学附属小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '教师进修学院': {
    'schoolName': '教师进修学院',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '闵行区中心小学': {
    'schoolName': '闵行区中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市杨浦区杨浦小学': {
    'schoolName': '上海市杨浦区杨浦小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '复兴东路第三小学': {
    'schoolName': '复兴东路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市杨浦区水丰路小学': {
    'schoolName': '上海市杨浦区水丰路小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '新世界小学[洪山校区]': {
    'schoolName': '新世界小学[洪山校区]',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '真如文英中心小学': {
    'schoolName': '真如文英中心小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市杨浦区齐齐哈尔路第一小学': {
    'schoolName': '上海市杨浦区齐齐哈尔路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '福山唐城小学': {
    'schoolName': '福山唐城小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '新普陀小学': {
    'schoolName': '新普陀小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '闵行区航华第一小学': {
    'schoolName': '闵行区航华第一小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市虹口区中州路第一小学': {
    'schoolName': '上海市虹口区中州路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '二梯队'
  },
  '上海市虹口区凉城第二小学': {
    'schoolName': '上海市虹口区凉城第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新港小学': {
    'schoolName': '新港小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区凉城第四小学': {
    'schoolName': '上海市虹口区凉城第四小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '天山第二小学': {
    'schoolName': '天山第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区复兴实验小学': {
    'schoolName': '上海市虹口区复兴实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区多伦同心小学': {
    'schoolName': '上海市虹口区多伦同心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区幸福四平实验小学': {
    'schoolName': '上海市虹口区幸福四平实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区广中路小学': {
    'schoolName': '上海市虹口区广中路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '世博家园实验小学': {
    'schoolName': '世博家园实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '施湾小学': {
    'schoolName': '施湾小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区张桥路小学': {
    'schoolName': '上海市虹口区张桥路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '七宝镇明强小学第二小学': {
    'schoolName': '七宝镇明强小学第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '昆阳小学': {
    'schoolName': '昆阳小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区曲阳第四小学': {
    'schoolName': '上海市虹口区曲阳第四小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '七色花小学': {
    'schoolName': '七色花小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区祥德路小学': {
    'schoolName': '上海市虹口区祥德路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '孙桥小学': {
    'schoolName': '孙桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '万德小学': {
    'schoolName': '万德小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区第二中心小学': {
    'schoolName': '上海市虹口区第二中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '学前小学': {
    'schoolName': '学前小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '明珠临港小学[夏栎校区]': {
    'schoolName': '明珠临港小学[夏栎校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '陆家宅小学': {
    'schoolName': '陆家宅小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '明珠临港小学[茉莉校区]': {
    'schoolName': '明珠临港小学[茉莉校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '管弄新村小学': {
    'schoolName': '管弄新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '万科实验小学[张江校区]': {
    'schoolName': '万科实验小学[张江校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '万科实验小学[滨江校区]': {
    'schoolName': '万科实验小学[滨江校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '明珠森兰小学': {
    'schoolName': '明珠森兰小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '安顺路小学': {
    'schoolName': '安顺路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '东沟小学': {
    'schoolName': '东沟小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '东波小学[沪东校区]': {
    'schoolName': '东波小学[沪东校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '三林小学': {
    'schoolName': '三林小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '东港小学': {
    'schoolName': '东港小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '三桥小学': {
    'schoolName': '三桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '东荷小学': {
    'schoolName': '东荷小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区乐业小学': {
    'schoolName': '宝山区乐业小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '东门小学': {
    'schoolName': '东门小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '晨阳小学': {
    'schoolName': '晨阳小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区共富新村小学': {
    'schoolName': '宝山区共富新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '三灶实验小学': {
    'schoolName': '三灶实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区同泰路小学': {
    'schoolName': '宝山区同泰路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '绿晨小学': {
    'schoolName': '绿晨小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '顾路小学': {
    'schoolName': '顾路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区同达小学': {
    'schoolName': '宝山区同达小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区呼玛路小学': {
    'schoolName': '宝山区呼玛路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '景东小学': {
    'schoolName': '景东小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '颛桥中心小学': {
    'schoolName': '颛桥中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '中华路第三小学': {
    'schoolName': '中华路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '香山小学': {
    'schoolName': '香山小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区大华第二小学': {
    'schoolName': '宝山区大华第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区大场中心小学': {
    'schoolName': '宝山区大场中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '罗山小学': {
    'schoolName': '罗山小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上南五村小学': {
    'schoolName': '上南五村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '临沂二村小学': {
    'schoolName': '临沂二村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区大场镇小学': {
    'schoolName': '宝山区大场镇小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '罗店大居九年一贯制学校': {
    'schoolName': '罗店大居九年一贯制学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '马桥实验学校': {
    'schoolName': '马桥实验学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区宝林路第三小学': {
    'schoolName': '宝山区宝林路第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '临港外国语小学': {
    'schoolName': '临港外国语小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区宝虹小学': {
    'schoolName': '宝山区宝虹小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '曹杨实验小学': {
    'schoolName': '曹杨实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区实验小学': {
    'schoolName': '宝山区实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '马桥文来外国语小学': {
    'schoolName': '马桥文来外国语小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '罗阳小学': {
    'schoolName': '罗阳小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '高东小学': {
    'schoolName': '高东小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '高南小学': {
    'schoolName': '高南小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上师大附属南陈路九年一贯制学校': {
    'schoolName': '上师大附属南陈路九年一贯制学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区月浦中心校': {
    'schoolName': '宝山区月浦中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '曹行小学': {
    'schoolName': '曹行小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '联丰小学': {
    'schoolName': '联丰小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上师大附属宝山实验学校': {
    'schoolName': '上师大附属宝山实验学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区月浦新村第三小学': {
    'schoolName': '宝山区月浦新村第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '曹路打一小学': {
    'schoolName': '曹路打一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '联建小学': {
    'schoolName': '联建小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '云台小学': {
    'schoolName': '云台小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区月浦新村第二小学': {
    'schoolName': '宝山区月浦新村第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '联航路': {
    'schoolName': '联航路',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区水产路小学': {
    'schoolName': '宝山区水产路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海世外教育附属宝山中环实验小学': {
    'schoolName': '上海世外教育附属宝山中环实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区永清路小学': {
    'schoolName': '宝山区永清路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '高桥镇小学[花山校区]': {
    'schoolName': '高桥镇小学[花山校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '高桥镇小学[高行校区]': {
    'schoolName': '高桥镇小学[高行校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区泗东小学': {
    'schoolName': '宝山区泗东小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区泰和新城小学': {
    'schoolName': '宝山区泰和新城小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '育童小学': {
    'schoolName': '育童小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '高行小学': {
    'schoolName': '高行小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海世外教育附属浦江外国语学校': {
    'schoolName': '上海世外教育附属浦江外国语学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区淞兴路第一小学': {
    'schoolName': '宝山区淞兴路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区淞南中心校': {
    'schoolName': '宝山区淞南中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区淞南第二小学': {
    'schoolName': '宝山区淞南第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区淞滨路小学': {
    'schoolName': '宝山区淞滨路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '朱家角小学': {
    'schoolName': '朱家角小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区盛桥中心校': {
    'schoolName': '宝山区盛桥中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '黄楼小学': {
    'schoolName': '黄楼小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '佳禾小学': {
    'schoolName': '佳禾小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区石洞口小学': {
    'schoolName': '宝山区石洞口小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '航城实验小学[航春路校区]': {
    'schoolName': '航城实验小学[航春路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区祁连镇中心校': {
    'schoolName': '宝山区祁连镇中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '航城实验小学[鹤驰路校区]': {
    'schoolName': '航城实验小学[鹤驰路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海体育职业学院附属小学': {
    'schoolName': '上海体育职业学院附属小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '杨园小学': {
    'schoolName': '杨园小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区罗南中心校': {
    'schoolName': '宝山区罗南中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区罗店中心校': {
    'schoolName': '宝山区罗店中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '花园学校': {
    'schoolName': '花园学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '傅雷小学': {
    'schoolName': '傅雷小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区美罗家园第一小学': {
    'schoolName': '宝山区美罗家园第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '杨思小学': {
    'schoolName': '杨思小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '花木小学': {
    'schoolName': '花木小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海大学附属小学': {
    'schoolName': '上海大学附属小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区菊泉学校': {
    'schoolName': '宝山区菊泉学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '黎明小学': {
    'schoolName': '黎明小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '荡湾小学': {
    'schoolName': '荡湾小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区通河新村小学': {
    'schoolName': '宝山区通河新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区通河新村第三小学': {
    'schoolName': '宝山区通河新村第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '光明小学': {
    'schoolName': '光明小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区通河新村第二小学': {
    'schoolName': '宝山区通河新村第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区长江路小学': {
    'schoolName': '宝山区长江路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区陈伯吹实验小学': {
    'schoolName': '宝山区陈伯吹实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '林苑小学': {
    'schoolName': '林苑小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '六团小学': {
    'schoolName': '六团小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区顾村中心校': {
    'schoolName': '宝山区顾村中心校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '六师二附小': {
    'schoolName': '六师二附小',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '树德小学': {
    'schoolName': '树德小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '宝山区高境镇第三小学': {
    'schoolName': '宝山区高境镇第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '六灶小学': {
    'schoolName': '六灶小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '桃浦中心小学': {
    'schoolName': '桃浦中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '实验小学': {
    'schoolName': '实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '梅园小学': {
    'schoolName': '梅园小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '莱阳小学': {
    'schoolName': '莱阳小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '梅溪小学': {
    'schoolName': '梅溪小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '凌兆小学': {
    'schoolName': '凌兆小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '梅陇中心小学': {
    'schoolName': '梅陇中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '凌桥小学': {
    'schoolName': '凌桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '董家渡路第二小学': {
    'schoolName': '董家渡路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '凌河小学': {
    'schoolName': '凌河小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市同洲模范学校': {
    'schoolName': '上海市同洲模范学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '凤溪小学': {
    'schoolName': '凤溪小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '蔡路逸夫小学': {
    'schoolName': '蔡路逸夫小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '北新泾第三小学': {
    'schoolName': '北新泾第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '北新泾第二小学': {
    'schoolName': '北新泾第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '北桥中心小学': {
    'schoolName': '北桥中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '尚鸿小学': {
    'schoolName': '尚鸿小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '崂山小学[周浦校区]': {
    'schoolName': '崂山小学[周浦校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '崂山小学[陆家嘴校区]': {
    'schoolName': '崂山小学[陆家嘴校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '崧文小学': {
    'schoolName': '崧文小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '嵩华小学': {
    'schoolName': '嵩华小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华东师范大学闵行永德实验小学': {
    'schoolName': '华东师范大学闵行永德实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '江镇小学': {
    'schoolName': '江镇小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '汽轮科技实验小学': {
    'schoolName': '汽轮科技实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市闸北成功教育实验小学': {
    'schoolName': '上海市闸北成功教育实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '沈巷小学': {
    'schoolName': '沈巷小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区三泉路小学': {
    'schoolName': '上海市静安区三泉路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '虹桥机场小学': {
    'schoolName': '虹桥机场小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区临汾路小学': {
    'schoolName': '上海市静安区临汾路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '沪新小学': {
    'schoolName': '沪新小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区保德路小学': {
    'schoolName': '上海市静安区保德路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '平利一小': {
    'schoolName': '平利一小',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区共康小学': {
    'schoolName': '上海市静安区共康小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区和田路小学': {
    'schoolName': '上海市静安区和田路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华新小学': {
    'schoolName': '华新小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区大宁路小学': {
    'schoolName': '上海市静安区大宁路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '泥城小学': {
    'schoolName': '泥城小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华林小学': {
    'schoolName': '华林小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区宝山路小学': {
    'schoolName': '上海市静安区宝山路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华阴小学': {
    'schoolName': '华阴小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华高小学[东靖校区]': {
    'schoolName': '华高小学[东靖校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '华高小学[华高校区]': {
    'schoolName': '华高小学[华高校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区彭浦新村第五小学': {
    'schoolName': '上海市静安区彭浦新村第五小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '洋泾实验小学': {
    'schoolName': '洋泾实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区景凤路小学': {
    'schoolName': '上海市静安区景凤路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '康桥实验小学': {
    'schoolName': '康桥实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区止园路小学': {
    'schoolName': '上海市静安区止园路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '康桥小学': {
    'schoolName': '康桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区世界小学': {
    'schoolName': '上海市徐汇区世界小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区永兴路小学': {
    'schoolName': '上海市静安区永兴路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区永兴路第二小学': {
    'schoolName': '上海市静安区永兴路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '豫英小学': {
    'schoolName': '豫英小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区东安三村小学': {
    'schoolName': '上海市徐汇区东安三村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区永和小学': {
    'schoolName': '上海市静安区永和小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '黄浦一中心世博小学': {
    'schoolName': '黄浦一中心世博小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区光启小学': {
    'schoolName': '上海市徐汇区光启小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区科技学校': {
    'schoolName': '上海市静安区科技学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区华泾小学': {
    'schoolName': '上海市徐汇区华泾小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦三路小学': {
    'schoolName': '浦三路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '南汇外国语小学[为民校区]': {
    'schoolName': '南汇外国语小学[为民校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区向阳育才小学': {
    'schoolName': '上海市徐汇区向阳育才小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '南汇外国语小学[共川校区]': {
    'schoolName': '南汇外国语小学[共川校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区吴中路小学': {
    'schoolName': '上海市徐汇区吴中路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区育婴堂路小学': {
    'schoolName': '上海市静安区育婴堂路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区蕃瓜弄小学': {
    'schoolName': '上海市静安区蕃瓜弄小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '建平临港小学[古棕路校区]': {
    'schoolName': '建平临港小学[古棕路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '博文学校': {
    'schoolName': '博文学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '建平临港小学[橄榄路校区]': {
    'schoolName': '建平临港小学[橄榄路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦汇小学': {
    'schoolName': '浦汇小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦江汇秀小学': {
    'schoolName': '浦江汇秀小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '进涛小学': {
    'schoolName': '进涛小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区徐浦小学': {
    'schoolName': '上海市徐汇区徐浦小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '卢湾三中心小学': {
    'schoolName': '卢湾三中心小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦江第一小学': {
    'schoolName': '浦江第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市静安区阳曲路小学': {
    'schoolName': '上海市静安区阳曲路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦江第三小学': {
    'schoolName': '浦江第三小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区日晖新村小学': {
    'schoolName': '上海市徐汇区日晖新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区樱花园小学': {
    'schoolName': '上海市徐汇区樱花园小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '浦江第二小学': {
    'schoolName': '浦江第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '重固小学': {
    'schoolName': '重固小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '重庆北路小学': {
    'schoolName': '重庆北路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区江南新村小学': {
    'schoolName': '上海市徐汇区江南新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区田林小学': {
    'schoolName': '上海市徐汇区田林小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '古北路小学': {
    'schoolName': '古北路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '海华小学': {
    'schoolName': '海华小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金新小学': {
    'schoolName': '金新小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区田林第一小学': {
    'schoolName': '上海市徐汇区田林第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '张桥小学': {
    'schoolName': '张桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金桥小学[菏泽校区]': {
    'schoolName': '金桥小学[菏泽校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区虹桥路小学': {
    'schoolName': '上海市徐汇区虹桥路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金桥小学[金粤校区]': {
    'schoolName': '金桥小学[金粤校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区西位实验小学': {
    'schoolName': '上海市徐汇区西位实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '合庆小学': {
    'schoolName': '合庆小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '张江小学': {
    'schoolName': '张江小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区长桥第二小学': {
    'schoolName': '上海市徐汇区长桥第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金沙江路小学': {
    'schoolName': '金沙江路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '淮海中路小学': {
    'schoolName': '淮海中路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金英小学': {
    'schoolName': '金英小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区龙华小学': {
    'schoolName': '上海市徐汇区龙华小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市徐汇区龙南小学': {
    'schoolName': '上海市徐汇区龙南小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金茂小学': {
    'schoolName': '金茂小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市教育科学研究院实验小学': {
    'schoolName': '上海市教育科学研究院实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '向阳小学': {
    'schoolName': '向阳小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '清源小学': {
    'schoolName': '清源小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '金陆小学': {
    'schoolName': '金陆小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '徐泾第一小学': {
    'schoolName': '徐泾第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海戏剧学院附属闵行实验学校': {
    'schoolName': '上海戏剧学院附属闵行实验学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '鑫都小学': {
    'schoolName': '鑫都小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '吴泾实验小学': {
    'schoolName': '吴泾实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '潼港小学': {
    'schoolName': '潼港小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '周浦三小[东南新村校区]': {
    'schoolName': '周浦三小[东南新村校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '周浦三小[鹤洁路校区]': {
    'schoolName': '周浦三小[鹤洁路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海棋院实验小学': {
    'schoolName': '上海棋院实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '德州一村小学': {
    'schoolName': '德州一村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '瀚文小学': {
    'schoolName': '瀚文小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区世界小学': {
    'schoolName': '上海市杨浦区世界小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '周浦二小[公元新村校区]': {
    'schoolName': '周浦二小[公元新村校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '德州二村小学': {
    'schoolName': '德州二村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '周浦二小[瑞建路校区]': {
    'schoolName': '周浦二小[瑞建路校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '锦绣小学': {
    'schoolName': '锦绣小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区中原路小学分校': {
    'schoolName': '上海市杨浦区中原路小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '周浦小学': {
    'schoolName': '周浦小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区内江路小学': {
    'schoolName': '上海市杨浦区内江路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '王港小学': {
    'schoolName': '王港小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '长宁路小学': {
    'schoolName': '长宁路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '哈密路小学': {
    'schoolName': '哈密路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '唐镇小学': {
    'schoolName': '唐镇小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '恒德小学': {
    'schoolName': '恒德小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '惠南二小': {
    'schoolName': '惠南二小',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区国和小学': {
    'schoolName': '上海市杨浦区国和小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区工农新村小学': {
    'schoolName': '上海市杨浦区工农新村小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '田园第二外语实验小学': {
    'schoolName': '田园第二外语实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区市光新村第一小学': {
    'schoolName': '上海市杨浦区市光新村第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '四川南路小学': {
    'schoolName': '四川南路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '回民小学': {
    'schoolName': '回民小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '由由小学': {
    'schoolName': '由由小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区平凉路第四小学': {
    'schoolName': '上海市杨浦区平凉路第四小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区建设小学': {
    'schoolName': '上海市杨浦区建设小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '申莘小学': {
    'schoolName': '申莘小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区开鲁新村第一小学': {
    'schoolName': '上海市杨浦区开鲁新村第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区开鲁新村第二小学': {
    'schoolName': '上海市杨浦区开鲁新村第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '报童小学': {
    'schoolName': '报童小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '白玉兰小学[三杨校区]': {
    'schoolName': '白玉兰小学[三杨校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '白玉兰小学[临沂校区]': {
    'schoolName': '白玉兰小学[临沂校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区控江二村小学分校': {
    'schoolName': '上海市杨浦区控江二村小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市漕河泾新兴技术开发区实验小学': {
    'schoolName': '上海市漕河泾新兴技术开发区实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区政立路小学': {
    'schoolName': '上海市杨浦区政立路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '白鹤小学': {
    'schoolName': '白鹤小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '塘桥第一小学': {
    'schoolName': '塘桥第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区杨浦小学分校': {
    'schoolName': '上海市杨浦区杨浦小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '复兴中路第二小学': {
    'schoolName': '复兴中路第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '教院附小': {
    'schoolName': '教院附小',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区杭州路第一小学': {
    'schoolName': '上海市杨浦区杭州路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区民星路小学': {
    'schoolName': '上海市杨浦区民星路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '真光小学': {
    'schoolName': '真光小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区水丰路小学分校': {
    'schoolName': '上海市杨浦区水丰路小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区翔殷路小学': {
    'schoolName': '上海市杨浦区翔殷路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '复旦大学附属徐汇实验学校': {
    'schoolName': '复旦大学附属徐汇实验学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '真如三小': {
    'schoolName': '真如三小',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区长白二村小学分校': {
    'schoolName': '上海市杨浦区长白二村小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '复旦大学附属闵行实验学校': {
    'schoolName': '复旦大学附属闵行实验学校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市杨浦区齐齐哈尔路第一小学分校': {
    'schoolName': '上海市杨浦区齐齐哈尔路第一小学分校',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新凌小学': {
    'schoolName': '新凌小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '瞿溪路小学': {
    'schoolName': '瞿溪路小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '石笋实验小学': {
    'schoolName': '石笋实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新场实验小学': {
    'schoolName': '新场实验小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '石笋小学': {
    'schoolName': '石笋小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新场小学': {
    'schoolName': '新场小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '碧江小学': {
    'schoolName': '碧江小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新城小学': {
    'schoolName': '新城小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '大团小学': {
    'schoolName': '大团小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '祝桥小学': {
    'schoolName': '祝桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '大桥小学': {
    'schoolName': '大桥小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新时代小学[大华校区]': {
    'schoolName': '新时代小学[大华校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '新时代小学[浦三校区]': {
    'schoolName': '新时代小学[浦三校区]',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区东余杭路第一小学': {
    'schoolName': '上海市虹口区东余杭路第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '闵行区航华第二小学': {
    'schoolName': '闵行区航华第二小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '上海市虹口区丰镇第一小学': {
    'schoolName': '上海市虹口区丰镇第一小学',
    'schoolType': '小学',
    'echelonPerformance': '其他'
  },
  '安庆幼儿园（自主招生）': {
    'schoolName': '安庆幼儿园（自主招生）',
    'schoolType': '幼儿园',
    'echelonPerformance': ''
  },
  '分园': {
    'schoolName': '分园',
    'schoolType': '幼儿园',
    'echelonPerformance': ''
  },
  '上海市浦东新区经纬幼儿园（鹤驰部）': {
    'schoolName': '上海市浦东新区经纬幼儿园（鹤驰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': ''
  },
  '上海闵行区博爱幼儿园（仅持产证累）': {
    'schoolName': '上海闵行区博爱幼儿园（仅持产证累）',
    'schoolType': '幼儿园',
    'echelonPerformance': ''
  },
  '闵行区莘松幼儿园四季苑分园': {
    'schoolName': '闵行区莘松幼儿园四季苑分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  ' 上海市浦东新区好时光幼儿园（海顺部）': {
    'schoolName': ' 上海市浦东新区好时光幼儿园（海顺部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区七色花幼儿园（梓康部）': {
    'schoolName': '上海市浦东新区七色花幼儿园（梓康部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '秋月枫幼儿园': {
    'schoolName': '秋月枫幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区莘松幼儿园莘纪苑分园': {
    'schoolName': '闵行区莘松幼儿园莘纪苑分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区莘松第二幼儿园': {
    'schoolName': '闵行区莘松第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '太山新村幼儿园': {
    'schoolName': '太山新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '太阳花幼稚园': {
    'schoolName': '太阳花幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区虹桥中心幼儿园': {
    'schoolName': '闵行区虹桥中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区万祥幼儿园（祥安部、祥隆部）': {
    'schoolName': '上海市浦东新区万祥幼儿园（祥安部、祥隆部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '奥林幼儿园': {
    'schoolName': '奥林幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '新跃双语幼稚园': {
    'schoolName': '新跃双语幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区虹桥中心幼儿园古北分园': {
    'schoolName': '闵行区虹桥中心幼儿园古北分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '好小囡幼儿园': {
    'schoolName': '好小囡幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '新闸路幼儿园': {
    'schoolName': '新闸路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区闵行第一幼儿园': {
    'schoolName': '闵行区闵行第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区宣桥幼儿园  （总部--中大班）（分部--小班）': {
    'schoolName': '上海市浦东新区宣桥幼儿园  （总部--中大班）（分部--小班）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '童星幼儿品尊国际分园': {
    'schoolName': '童星幼儿品尊国际分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区闵行第一幼儿园畅馨分园': {
    'schoolName': '闵行区闵行第一幼儿园畅馨分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '童星幼儿园': {
    'schoolName': '童星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区马桥中心幼儿园': {
    'schoolName': '闵行区马桥中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区龙柏第一幼儿园': {
    'schoolName': '闵行区龙柏第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '威宁幼儿园': {
    'schoolName': '威宁幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区龙柏第二幼儿园分园': {
    'schoolName': '闵行区龙柏第二幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区新苗幼儿园': {
    'schoolName': '上海市浦东新区新苗幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '七色花幼儿园': {
    'schoolName': '七色花幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区三灶幼儿园（总部）   ': {
    'schoolName': '上海市浦东新区三灶幼儿园（总部）   ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区方竹幼儿园': {
    'schoolName': '上海市浦东新区方竹幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '明园村幼儿园': {
    'schoolName': '明园村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区昌里幼儿园': {
    'schoolName': '上海市浦东新区昌里幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '阳光幼稚园': {
    'schoolName': '阳光幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区上南九村幼儿园': {
    'schoolName': '上海市浦东新区上南九村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区明日之星幼儿园': {
    'schoolName': '上海市浦东新区明日之星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区明珠幼儿园': {
    'schoolName': '上海市浦东新区明珠幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '学前幼儿园': {
    'schoolName': '学前幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '陆家宅幼儿园': {
    'schoolName': '陆家宅幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '学府涵青幼儿园': {
    'schoolName': '学府涵青幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '管弄新村幼儿园': {
    'schoolName': '管弄新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '管弄新村幼儿园宝华分园': {
    'schoolName': '管弄新村幼儿园宝华分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区星雨幼儿园 （小帆船校区）': {
    'schoolName': '上海市浦东新区星雨幼儿园 （小帆船校区）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '陈伯吹实验幼儿园': {
    'schoolName': '陈伯吹实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区星雨幼儿园 （总部）   ': {
    'schoolName': '上海市浦东新区星雨幼儿园 （总部）   ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '紫霞幼儿园': {
    'schoolName': '紫霞幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区星韵幼儿园': {
    'schoolName': '上海市浦东新区星韵幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '红樱桃幼儿园': {
    'schoolName': '红樱桃幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '万里城实验幼儿园': {
    'schoolName': '万里城实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区春之声幼儿园（世博部）': {
    'schoolName': '上海市浦东新区春之声幼儿园（世博部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '红樱桃幼儿园浩浦分园': {
    'schoolName': '红樱桃幼儿园浩浦分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '宜川一村幼儿园分园': {
    'schoolName': '宜川一村幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '星星幼儿园': {
    'schoolName': '星星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '青苹果幼儿园': {
    'schoolName': '青苹果幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '星河世纪城幼儿园': {
    'schoolName': '星河世纪城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '宜川六村幼儿园': {
    'schoolName': '宜川六村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '宜川新村幼儿园华阴部': {
    'schoolName': '宜川新村幼儿园华阴部',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '星辰幼儿园金太阳分园（户籍类）': {
    'schoolName': '星辰幼儿园金太阳分园（户籍类）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '经纬幼儿园': {
    'schoolName': '经纬幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '宜川新村幼儿园延长部': {
    'schoolName': '宜川新村幼儿园延长部',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '星辰科技幼儿园': {
    'schoolName': '星辰科技幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '鞍山幼稚园': {
    'schoolName': '鞍山幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '晨星幼儿园': {
    'schoolName': '晨星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '绿地世纪城幼儿园分园': {
    'schoolName': '绿地世纪城幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区春之声幼儿园（林展部）': {
    'schoolName': '上海市浦东新区春之声幼儿园（林展部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '三花幼儿园': {
    'schoolName': '三花幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '三花幼儿园四季绿城部': {
    'schoolName': '三花幼儿园四季绿城部',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区晨阳幼儿园': {
    'schoolName': '上海市浦东新区晨阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区七宝实验幼儿园': {
    'schoolName': '上海市闵行区七宝实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区未来之星幼儿园（总部）': {
    'schoolName': '上海市浦东新区未来之星幼儿园（总部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区万源城幼儿园': {
    'schoolName': '上海市闵行区万源城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '中原幼稚园': {
    'schoolName': '中原幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区未来之星幼儿园（汤巷部）': {
    'schoolName': '上海市浦东新区未来之星幼儿园（汤巷部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区万源城幼儿园御璄分园': {
    'schoolName': '上海市闵行区万源城幼儿园御璄分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区懿德之爱幼儿园': {
    'schoolName': '上海市浦东新区懿德之爱幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '馨佳苑第二幼儿园': {
    'schoolName': '馨佳苑第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区民乐幼儿园': {
    'schoolName': '上海市浦东新区民乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区华漕镇金色幼儿园': {
    'schoolName': '上海市闵行区华漕镇金色幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区华漕镇金色幼儿园申长分园': {
    'schoolName': '上海市闵行区华漕镇金色幼儿园申长分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区协和罗阳幼儿园': {
    'schoolName': '上海市闵行区协和罗阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '曹杨新村幼儿园': {
    'schoolName': '曹杨新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '曹杨新村第三幼儿园': {
    'schoolName': '曹杨新村第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区古美中心幼儿园': {
    'schoolName': '上海市闵行区古美中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '乐怡幼儿园': {
    'schoolName': '乐怡幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '曹杨新村第八幼儿园': {
    'schoolName': '曹杨新村第八幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区古美中心幼儿园平南分园': {
    'schoolName': '上海市闵行区古美中心幼儿园平南分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '乾溪二幼儿园': {
    'schoolName': '乾溪二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '曹杨新村第六幼儿园': {
    'schoolName': '曹杨新村第六幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '美兰湖幼儿园': {
    'schoolName': '美兰湖幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区古美中心幼儿园平吉分园': {
    'schoolName': '上海市闵行区古美中心幼儿园平吉分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '美墅幼儿园祥和分园': {
    'schoolName': '美墅幼儿园祥和分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区君莲幼儿园': {
    'schoolName': '上海市闵行区君莲幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '高境镇第三幼儿园': {
    'schoolName': '高境镇第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区永泰幼儿园': {
    'schoolName': '上海市浦东新区永泰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区天恒名都幼儿园': {
    'schoolName': '上海市闵行区天恒名都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上河湾幼儿园': {
    'schoolName': '上河湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区安宁路幼儿园': {
    'schoolName': '上海市闵行区安宁路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东城幼儿园（东城部、政海部）': {
    'schoolName': '上海市浦东新区东城幼儿园（东城部、政海部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '五原路幼儿园': {
    'schoolName': '五原路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方城市幼儿园': {
    'schoolName': '上海市浦东新区东方城市幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区平吉四街坊幼儿园': {
    'schoolName': '上海市闵行区平吉四街坊幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区泥城幼儿园 （云锦部、云松部、云河部）': {
    'schoolName': '上海市浦东新区泥城幼儿园 （云锦部、云松部、云河部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区康城幼儿园': {
    'schoolName': '上海市闵行区康城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '五角场幼稚园': {
    'schoolName': '五角场幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区济阳一村幼儿园': {
    'schoolName': '上海市浦东新区济阳一村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '望德幼儿园': {
    'schoolName': '望德幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '仙一幼儿园': {
    'schoolName': '仙一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '仙二幼儿园': {
    'schoolName': '仙二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区海星幼儿园（金钻部）': {
    'schoolName': '上海市浦东新区海星幼儿园（金钻部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区星辰幼儿园': {
    'schoolName': '上海市闵行区星辰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '本溪艺术幼儿园': {
    'schoolName': '本溪艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区浦电幼儿园': {
    'schoolName': '上海市浦东新区浦电幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区春欣幼儿园': {
    'schoolName': '上海市闵行区春欣幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '余姚路幼儿园': {
    'schoolName': '余姚路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '航华第三幼儿园分园（户籍类）': {
    'schoolName': '航华第三幼儿园分园（户籍类）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方德尚幼儿园（华夏部）': {
    'schoolName': '上海市浦东新区东方德尚幼儿园（华夏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区海星幼儿园（海鸣部）': {
    'schoolName': '上海市浦东新区海星幼儿园（海鸣部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '余姚路第二幼儿园': {
    'schoolName': '余姚路第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海交通大学闵行幼儿园': {
    'schoolName': '上海交通大学闵行幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方德尚幼儿园（孙环部）': {
    'schoolName': '上海市浦东新区东方德尚幼儿园（孙环部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '朵朵幼儿园': {
    'schoolName': '朵朵幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方江韵幼儿园（张江部）': {
    'schoolName': '上海市浦东新区东方江韵幼儿园（张江部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '机关幼儿园': {
    'schoolName': '机关幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方江韵幼儿园（森兰部）': {
    'schoolName': '上海市浦东新区东方江韵幼儿园（森兰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '李子园幼儿园': {
    'schoolName': '李子园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东方锦绣幼儿园（秀沿部）': {
    'schoolName': '上海市浦东新区东方锦绣幼儿园（秀沿部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区海洲幼儿园': {
    'schoolName': '上海市浦东新区海洲幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区海阳之星幼儿园（海阳部）': {
    'schoolName': '上海市浦东新区海阳之星幼儿园（海阳部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区水清路幼儿园': {
    'schoolName': '上海市闵行区水清路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '杨家桥幼儿园': {
    'schoolName': '杨家桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '艺术幼儿园': {
    'schoolName': '艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区海阳之星幼儿园（瑞和部）': {
    'schoolName': '上海市浦东新区海阳之星幼儿园（瑞和部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区潮和幼儿园 （南园、北园）': {
    'schoolName': '上海市浦东新区潮和幼儿园 （南园、北园）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区浦江宝邸幼儿园': {
    'schoolName': '上海市闵行区浦江宝邸幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区浦江宝邸幼儿园瑞和分园': {
    'schoolName': '上海市闵行区浦江宝邸幼儿园瑞和分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '杨浦区教育学院附属幼儿园': {
    'schoolName': '杨浦区教育学院附属幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '兆丰幼儿园': {
    'schoolName': '兆丰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '杨浦区第二艺术幼儿园': {
    'schoolName': '杨浦区第二艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区浦江镇第一幼儿园': {
    'schoolName': '上海市闵行区浦江镇第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '龙山幼儿园': {
    'schoolName': '龙山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市临港新城海音幼儿园  （北园部、南园部）': {
    'schoolName': '上海市临港新城海音幼儿园  （北园部、南园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区浦江镇第二幼儿园': {
    'schoolName': '上海市闵行区浦江镇第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '荷花池第二幼儿园': {
    'schoolName': '荷花池第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区百合花幼儿园（三旋部）': {
    'schoolName': '上海市浦东新区百合花幼儿园（三旋部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区浦江镇第二幼儿园金硕分园': {
    'schoolName': '上海市闵行区浦江镇第二幼儿园金硕分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '荷露幼儿园': {
    'schoolName': '荷露幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东旭幼儿园': {
    'schoolName': '上海市浦东新区东旭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '松花新村第一幼儿园': {
    'schoolName': '松花新村第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '荷露幼儿园分园': {
    'schoolName': '荷露幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '公办蘑菇亭幼儿园': {
    'schoolName': '公办蘑菇亭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '松雪街幼儿园': {
    'schoolName': '松雪街幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区童心幼儿园（瑞浦部）': {
    'schoolName': '上海市浦东新区童心幼儿园（瑞浦部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '果果幼儿园': {
    'schoolName': '果果幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区紫叶幼儿园': {
    'schoolName': '上海市浦东新区紫叶幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好时光幼儿园（海顺部）': {
    'schoolName': '上海市浦东新区好时光幼儿园（海顺部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区爱博果果幼儿园': {
    'schoolName': '上海市闵行区爱博果果幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区秀文幼儿园': {
    'schoolName': '上海市闵行区秀文幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿川幼儿园（博华部）': {
    'schoolName': '上海市浦东新区绿川幼儿园（博华部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东波幼儿园': {
    'schoolName': '上海市浦东新区东波幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区翡翠幼儿园': {
    'schoolName': '上海市闵行区翡翠幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区航华第三幼儿园': {
    'schoolName': '上海市闵行区航华第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿川幼儿园（锦绣部）': {
    'schoolName': '上海市浦东新区绿川幼儿园（锦绣部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东荷幼儿园  (五莲部）': {
    'schoolName': '上海市浦东新区东荷幼儿园  (五莲部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区荷花池世博幼儿园': {
    'schoolName': '上海市闵行区荷花池世博幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '梅川幼儿园': {
    'schoolName': '梅川幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东荷幼儿园（利津部）': {
    'schoolName': '上海市浦东新区东荷幼儿园（利津部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区荷花池世博幼儿园分园': {
    'schoolName': '上海市闵行区荷花池世博幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区灵山幼儿园  （灵山部、银泰部）': {
    'schoolName': '上海市浦东新区灵山幼儿园  （灵山部、银泰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿川幼儿园（高青部）': {
    'schoolName': '上海市浦东新区绿川幼儿园（高青部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区东陆幼儿园': {
    'schoolName': '上海市浦东新区东陆幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小主人分园': {
    'schoolName': '小主人分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿苑幼儿园（听悦部）': {
    'schoolName': '上海市浦东新区绿苑幼儿园（听悦部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区中市街幼儿园（新德西路部）': {
    'schoolName': '上海市浦东新区中市街幼儿园（新德西路部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区王港幼儿园  （同馨部、新雅部）': {
    'schoolName': '上海市浦东新区王港幼儿园  （同馨部、新雅部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区莘庄第三幼儿园': {
    'schoolName': '上海市闵行区莘庄第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小主人幼儿园': {
    'schoolName': '小主人幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '梅陇幼儿园': {
    'schoolName': '梅陇幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区中市街幼儿园（西泥路部）': {
    'schoolName': '上海市浦东新区中市街幼儿园（西泥路部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区莘庄第二幼儿园': {
    'schoolName': '上海市闵行区莘庄第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小天使幼儿园': {
    'schoolName': '小天使幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区临沂一村幼儿园（博华部）': {
    'schoolName': '上海市浦东新区临沂一村幼儿园（博华部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区临沂一村幼儿园（总部）': {
    'schoolName': '上海市浦东新区临沂一村幼儿园（总部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小棋圣幼儿园': {
    'schoolName': '小棋圣幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区航瑞幼儿园 （航春部）': {
    'schoolName': '上海市浦东新区航瑞幼儿园 （航春部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区临沂五村幼儿园': {
    'schoolName': '上海市浦东新区临沂五村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小海螺幼儿园': {
    'schoolName': '小海螺幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区航瑞幼儿园（鹤涛部）': {
    'schoolName': '上海市浦东新区航瑞幼儿园（鹤涛部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区诸翟中心幼儿园': {
    'schoolName': '上海市闵行区诸翟中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小精灵幼儿园': {
    'schoolName': '小精灵幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '武夷幼儿园': {
    'schoolName': '武夷幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区贝贝星幼儿园（御山部）': {
    'schoolName': '上海市浦东新区贝贝星幼儿园（御山部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区百合花幼儿园（西泰林部）': {
    'schoolName': '上海市浦东新区百合花幼儿园（西泰林部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区诸翟中心幼儿园九韵分园': {
    'schoolName': '上海市闵行区诸翟中心幼儿园九韵分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区繁锦幼儿园': {
    'schoolName': '上海市浦东新区繁锦幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区鑫都幼儿园': {
    'schoolName': '上海市闵行区鑫都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区临潼路幼儿园': {
    'schoolName': '虹口区临潼路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区书院幼儿园（丽泽部、石皮泐部）': {
    'schoolName': '上海市浦东新区书院幼儿园（丽泽部、石皮泐部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区闵行第四幼儿园': {
    'schoolName': '上海市闵行区闵行第四幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '北二幼儿园': {
    'schoolName': '北二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '殷行路幼儿园': {
    'schoolName': '殷行路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区乐乐幼儿园': {
    'schoolName': '虹口区乐乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小红帽幼儿园': {
    'schoolName': '小红帽幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区百熙幼儿园': {
    'schoolName': '上海市浦东新区百熙幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区闵行第四幼儿园浦江分园': {
    'schoolName': '上海市闵行区闵行第四幼儿园浦江分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区凉城第一幼儿园': {
    'schoolName': '虹口区凉城第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区福山同乐幼儿园': {
    'schoolName': '上海市浦东新区福山同乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区闵行第四幼儿园金榜分园': {
    'schoolName': '上海市闵行区闵行第四幼儿园金榜分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小铃铛幼儿园分园': {
    'schoolName': '小铃铛幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区凉城第四幼儿园': {
    'schoolName': '虹口区凉城第四幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区福山幼儿园 （总部、乐乐部、梅园部）': {
    'schoolName': '上海市浦东新区福山幼儿园 （总部、乐乐部、梅园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金桥幼儿园（总部）': {
    'schoolName': '上海市浦东新区金桥幼儿园（总部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区童乐幼儿园': {
    'schoolName': '上海市浦东新区童乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区颛桥镇幼儿园莘闵分园': {
    'schoolName': '上海市闵行区颛桥镇幼儿园莘闵分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '小鸽子幼儿园': {
    'schoolName': '小鸽子幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '民星幼稚园': {
    'schoolName': '民星幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区黄楼幼儿园（航城部）': {
    'schoolName': '上海市浦东新区黄楼幼儿园（航城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区六团幼儿园(六团部)': {
    'schoolName': '上海市浦东新区六团幼儿园(六团部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区童心幼儿园（瑞浦部）【1-143】': {
    'schoolName': '上海市浦东新区童心幼儿园（瑞浦部）【1-143】',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区颛桥镇第一幼儿园': {
    'schoolName': '上海市闵行区颛桥镇第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区小不点幼儿园': {
    'schoolName': '虹口区小不点幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区六团幼儿园(鼎鑫部)': {
    'schoolName': '上海市浦东新区六团幼儿园(鼎鑫部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区颛桥镇第一幼儿园银桥分园': {
    'schoolName': '上海市闵行区颛桥镇第一幼儿园银桥分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '北石路幼儿园': {
    'schoolName': '北石路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '永安路幼儿园': {
    'schoolName': '永安路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市好时光金拇指幼儿园': {
    'schoolName': '上海市好时光金拇指幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区兰亭幼儿园': {
    'schoolName': '上海市浦东新区兰亭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '北石路幼儿园苗苗分园': {
    'schoolName': '北石路幼儿园苗苗分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区童瑶幼儿园（龙昌部、锦绣部）': {
    'schoolName': '上海市浦东新区童瑶幼儿园（龙昌部、锦绣部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区马桥元祥幼儿园': {
    'schoolName': '上海市闵行区马桥元祥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区竹园幼儿园': {
    'schoolName': '上海市浦东新区竹园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '岚皋路幼儿园': {
    'schoolName': '岚皋路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '汇丽幼儿园': {
    'schoolName': '汇丽幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区马桥实验幼儿园': {
    'schoolName': '上海市闵行区马桥实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区星贝幼儿园': {
    'schoolName': '虹口区星贝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '汇星幼儿园': {
    'schoolName': '汇星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹口区星贝幼儿园彩虹湾分园': {
    'schoolName': '虹口区星贝幼儿园彩虹湾分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '汇霖幼儿园': {
    'schoolName': '汇霖幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '东新幼儿园分园': {
    'schoolName': '东新幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区冰厂田滴水湖幼儿园（宜浩部、茉莉部）': {
    'schoolName': '上海市浦东新区冰厂田滴水湖幼儿园（宜浩部、茉莉部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '汇龙幼儿园': {
    'schoolName': '汇龙幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区凌桥幼儿园  （凌高部）': {
    'schoolName': '上海市浦东新区凌桥幼儿园  （凌高部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区凌桥幼儿园 （展凌路）': {
    'schoolName': '上海市浦东新区凌桥幼儿园 （展凌路）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区鹤庆幼儿园': {
    'schoolName': '上海市闵行区鹤庆幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区凌民幼儿园': {
    'schoolName': '上海市浦东新区凌民幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区鹤庆幼儿园兰坪分园': {
    'schoolName': '上海市闵行区鹤庆幼儿园兰坪分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区红苹果幼儿园': {
    'schoolName': '上海市浦东新区红苹果幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区红蜻蜓幼儿园': {
    'schoolName': '上海市浦东新区红蜻蜓幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区龙茗路幼儿园': {
    'schoolName': '上海市闵行区龙茗路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区经纬幼儿园（鹤永部）': {
    'schoolName': '上海市浦东新区经纬幼儿园（鹤永部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市闵行区龙茗路幼儿园虹莘分园': {
    'schoolName': '上海市闵行区龙茗路幼儿园虹莘分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '华东师范大学闵行永德实验幼儿园': {
    'schoolName': '华东师范大学闵行永德实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '市东幼儿园': {
    'schoolName': '市东幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绣川幼儿园（川迪部）': {
    'schoolName': '上海市浦东新区绣川幼儿园（川迪部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '华东师范大学闵行永德实验幼儿园尚德分园': {
    'schoolName': '华东师范大学闵行永德实验幼儿园尚德分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '市光一村幼稚园': {
    'schoolName': '市光一村幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绣川幼儿园（平川部）': {
    'schoolName': '上海市浦东新区绣川幼儿园（平川部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '市光二村幼儿园': {
    'schoolName': '市光二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '华东师范大学附属紫竹幼儿园': {
    'schoolName': '华东师范大学附属紫竹幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹城幼儿园': {
    'schoolName': '虹城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区华林幼儿园（培花部）': {
    'schoolName': '上海市浦东新区华林幼儿园（培花部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区华林幼儿园（由由部）': {
    'schoolName': '上海市浦东新区华林幼儿园（由由部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '帕提欧幼儿园': {
    'schoolName': '帕提欧幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区华林幼儿园（芳波部）': {
    'schoolName': '上海市浦东新区华林幼儿园（芳波部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '帕缇欧香幼儿园': {
    'schoolName': '帕缇欧香幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '沪太新村第二幼儿园': {
    'schoolName': '沪太新村第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '虹桥幼儿园': {
    'schoolName': '虹桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '普雄路幼儿园': {
    'schoolName': '普雄路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区华高幼儿园 （西园--小班）（东园--中大班）': {
    'schoolName': '上海市浦东新区华高幼儿园 （西园--小班）（东园--中大班）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿洲幼儿园': {
    'schoolName': '上海市浦东新区绿洲幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '华山美术幼儿园': {
    'schoolName': '华山美术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '常德书法幼儿园': {
    'schoolName': '常德书法幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '常熟幼儿园': {
    'schoolName': '常熟幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '行知实验幼儿园': {
    'schoolName': '行知实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '杏山路幼儿园（金沙分园、桂巷分园）': {
    'schoolName': '杏山路幼儿园（金沙分园、桂巷分园）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '泗东幼儿园': {
    'schoolName': '泗东幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '襄阳南路第一幼儿园': {
    'schoolName': '襄阳南路第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区绿苑幼儿园（德盈部）': {
    'schoolName': '上海市浦东新区绿苑幼儿园（德盈部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '西凌第一幼儿园': {
    'schoolName': '西凌第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区博山幼儿园   （总部、分部）': {
    'schoolName': '上海市浦东新区博山幼儿园   （总部、分部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区羽灵幼儿园（羽山部）': {
    'schoolName': '上海市浦东新区羽灵幼儿园（羽山部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区羽灵幼儿园（郦景部）': {
    'schoolName': '上海市浦东新区羽灵幼儿园（郦景部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区合庆幼儿园': {
    'schoolName': '上海市浦东新区合庆幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '南京东路幼儿园': {
    'schoolName': '南京东路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '南新幼儿园': {
    'schoolName': '南新幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周东幼儿园（吉祥部）': {
    'schoolName': '上海市浦东新区周东幼儿园（吉祥部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '豪园幼儿园雅苑分园': {
    'schoolName': '豪园幼儿园雅苑分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周东幼儿园（周东部）': {
    'schoolName': '上海市浦东新区周东幼儿园（周东部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周浦幼儿园 （康景部）': {
    'schoolName': '上海市浦东新区周浦幼儿园 （康景部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '豫苗幼儿园': {
    'schoolName': '豫苗幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周浦幼儿园（公元部）': {
    'schoolName': '上海市浦东新区周浦幼儿园（公元部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区芦潮港幼儿园': {
    'schoolName': '上海市浦东新区芦潮港幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '康泰幼儿园': {
    'schoolName': '康泰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '康苑幼儿园': {
    'schoolName': '康苑幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '贝贝幼儿园': {
    'schoolName': '贝贝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周浦幼儿园（秀康部）': {
    'schoolName': '上海市浦东新区周浦幼儿园（秀康部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区莱阳幼儿园  （沪东部--小班）（莱阳部--中大班）': {
    'schoolName': '上海市浦东新区莱阳幼儿园  （沪东部--小班）（莱阳部--中大班）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周浦欧风幼儿园（瑞意部）': {
    'schoolName': '上海市浦东新区周浦欧风幼儿园（瑞意部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区周浦欧风幼儿园（瑞福部）': {
    'schoolName': '上海市浦东新区周浦欧风幼儿园（瑞福部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '延安中路幼儿园': {
    'schoolName': '延安中路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区唐镇幼儿园': {
    'schoolName': '上海市浦东新区唐镇幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区蓝贝壳幼儿园（朵朵部）': {
    'schoolName': '上海市浦东新区蓝贝壳幼儿园（朵朵部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区蓝贝壳幼儿园（贝贝部）': {
    'schoolName': '上海市浦东新区蓝贝壳幼儿园（贝贝部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区蔡路幼儿园': {
    'schoolName': '上海市浦东新区蔡路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区塘桥幼儿园': {
    'schoolName': '上海市浦东新区塘桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区七色花幼儿园（南新部、绿林部）': {
    'schoolName': '上海市浦东新区七色花幼儿园（南新部、绿林部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '通河幼儿园': {
    'schoolName': '通河幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '印象幼儿园': {
    'schoolName': '印象幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区大团幼儿园': {
    'schoolName': '上海市浦东新区大团幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '友谊路幼儿园': {
    'schoolName': '友谊路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '浪花幼儿园': {
    'schoolName': '浪花幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '重庆南路幼儿园': {
    'schoolName': '重庆南路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区天天乐幼儿园（塘东部）': {
    'schoolName': '上海市浦东新区天天乐幼儿园（塘东部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '海三幼儿园': {
    'schoolName': '海三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区天天乐幼儿园（浦建部）': {
    'schoolName': '上海市浦东新区天天乐幼儿园（浦建部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '金月亮幼儿园': {
    'schoolName': '金月亮幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '金月亮幼儿园爱心分园': {
    'schoolName': '金月亮幼儿园爱心分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金新幼儿园（花园部--小班）（总部--中大班）  ': {
    'schoolName': '上海市浦东新区金新幼儿园（花园部--小班）（总部--中大班）  ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '开鲁幼稚园': {
    'schoolName': '开鲁幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金桥幼儿园（三桥部）': {
    'schoolName': '上海市浦东新区金桥幼儿园（三桥部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '海粟幼儿园': {
    'schoolName': '海粟幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区上炼三村幼儿园': {
    'schoolName': '上海市浦东新区上炼三村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '海贝幼儿园': {
    'schoolName': '海贝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金爵幼儿园  (唐安部)': {
    'schoolName': '上海市浦东新区金爵幼儿园  (唐安部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海师范大学闵行实验幼儿园': {
    'schoolName': '上海师范大学闵行实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '淞南中心幼儿园': {
    'schoolName': '淞南中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金爵幼儿园 (齐爱部) ': {
    'schoolName': '上海市浦东新区金爵幼儿园 (齐爱部) ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海师范大学闵行实验幼儿园翔泰分园': {
    'schoolName': '上海师范大学闵行实验幼儿园翔泰分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '淞南实验幼儿园': {
    'schoolName': '淞南实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金科苑幼儿园（金杨部、灵山部）': {
    'schoolName': '上海市浦东新区金科苑幼儿园（金杨部、灵山部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '彩虹幼儿园': {
    'schoolName': '彩虹幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区天虹幼儿园（东靖部）': {
    'schoolName': '上海市浦东新区天虹幼儿园（东靖部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区天虹幼儿园（思学部）': {
    'schoolName': '上海市浦东新区天虹幼儿园（思学部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金粤幼儿园': {
    'schoolName': '上海市浦东新区金粤幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '向阳幼儿园': {
    'schoolName': '向阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '徐汇实验幼儿园': {
    'schoolName': '徐汇实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '金锣号幼儿园': {
    'schoolName': '金锣号幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好儿童幼儿园': {
    'schoolName': '上海市浦东新区好儿童幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金钥匙幼儿园 （浦东大道部）': {
    'schoolName': '上海市浦东新区金钥匙幼儿园 （浦东大道部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '满天星幼儿园': {
    'schoolName': '满天星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好奇妙幼儿园 （森兰部）': {
    'schoolName': '上海市浦东新区好奇妙幼儿园 （森兰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区金钥匙幼儿园（金东名苑部）': {
    'schoolName': '上海市浦东新区金钥匙幼儿园（金东名苑部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '吴江幼儿园': {
    'schoolName': '吴江幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '满天星幼儿园小鸽子分园': {
    'schoolName': '满天星幼儿园小鸽子分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好奇妙幼儿园 （荷兰部） ': {
    'schoolName': '上海市浦东新区好奇妙幼儿园 （荷兰部） ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好日子幼儿园': {
    'schoolName': '上海市浦东新区好日子幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区锦绣幼儿园': {
    'schoolName': '上海市浦东新区锦绣幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区好时光幼儿园 (民雷部)': {
    'schoolName': '上海市浦东新区好时光幼儿园 (民雷部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区阳光幼儿园': {
    'schoolName': '上海市浦东新区阳光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区孙桥幼儿园': {
    'schoolName': '上海市浦东新区孙桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区雪野幼儿园': {
    'schoolName': '上海市浦东新区雪野幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '银锄湖幼儿园': {
    'schoolName': '银锄湖幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '银锄湖幼儿园海鑫分园': {
    'schoolName': '银锄湖幼儿园海鑫分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区小天使幼儿园': {
    'schoolName': '上海市浦东新区小天使幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区小浪花幼儿园（南林部）': {
    'schoolName': '上海市浦东新区小浪花幼儿园（南林部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区小浪花幼儿园（林苑部）': {
    'schoolName': '上海市浦东新区小浪花幼儿园（林苑部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '思南新天地幼儿园': {
    'schoolName': '思南新天地幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区香山幼儿园': {
    'schoolName': '上海市浦东新区香山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区高东幼儿园 （杨园部）': {
    'schoolName': '上海市浦东新区高东幼儿园 （杨园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区尚东之星幼儿园': {
    'schoolName': '上海市浦东新区尚东之星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区高东幼儿园（高东部）': {
    'schoolName': '上海市浦东新区高东幼儿园（高东部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '哈密幼儿园': {
    'schoolName': '哈密幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区高南幼儿园': {
    'schoolName': '上海市浦东新区高南幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '瑞德幼儿园': {
    'schoolName': '瑞德幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区高欣幼儿园 （学前部--小班中班）小浜部--中班大班）': {
    'schoolName': '上海市浦东新区高欣幼儿园 （学前部--小班中班）小浜部--中班大班）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '恒力锦沧幼儿园车站分园': {
    'schoolName': '恒力锦沧幼儿园车站分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区高科幼儿园': {
    'schoolName': '上海市浦东新区高科幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区鹏飞幼儿园': {
    'schoolName': '上海市浦东新区鹏飞幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '甜甜乐幼儿园': {
    'schoolName': '甜甜乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '长征中心幼儿园': {
    'schoolName': '长征中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区鹤沙之星幼儿园（鹤沙部）': {
    'schoolName': '上海市浦东新区鹤沙之星幼儿园（鹤沙部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '四季万科幼儿园': {
    'schoolName': '四季万科幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '长征中心幼儿园象源丽都分园': {
    'schoolName': '长征中心幼儿园象源丽都分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区崂山东路幼儿园 （崂东部、潍坊部、泉潍部）      ': {
    'schoolName': '上海市浦东新区崂山东路幼儿园 （崂东部、潍坊部、泉潍部）      ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区鹤沙之星幼儿园（鹤洁部）': {
    'schoolName': '上海市浦东新区鹤沙之星幼儿园（鹤洁部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '四季艺术幼儿园': {
    'schoolName': '四季艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区崂山幼儿园': {
    'schoolName': '上海市浦东新区崂山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '四季艺术幼儿园延川分园': {
    'schoolName': '四季艺术幼儿园延川分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区川沙幼儿园（华夏部）': {
    'schoolName': '上海市浦东新区川沙幼儿园（华夏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '长桥第三幼儿园': {
    'schoolName': '长桥第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区川沙幼儿园（南桥部）': {
    'schoolName': '上海市浦东新区川沙幼儿园（南桥部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区黄楼幼儿园（黄楼部）': {
    'schoolName': '上海市浦东新区黄楼幼儿园（黄楼部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '田林第六幼儿园': {
    'schoolName': '田林第六幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区巨野幼儿园 （总部、分部）': {
    'schoolName': '上海市浦东新区巨野幼儿园 （总部、分部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '愚五幼儿园': {
    'schoolName': '愚五幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区常青幼儿园': {
    'schoolName': '上海市浦东新区常青幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '回民幼儿园': {
    'schoolName': '回民幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区广兰幼儿园（广兰部、香楠部）': {
    'schoolName': '上海市浦东新区广兰幼儿园（广兰部、香楠部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '园南幼儿园': {
    'schoolName': '园南幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '长风二村幼儿园': {
    'schoolName': '长风二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区康弘幼儿园（葵园部）': {
    'schoolName': '上海市浦东新区康弘幼儿园（葵园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '长风二村幼儿园梅六分园': {
    'schoolName': '长风二村幼儿园梅六分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区康弘幼儿园（蕙园部）': {
    'schoolName': '上海市浦东新区康弘幼儿园（蕙园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区龚路幼儿园（龚华部）（永华部）': {
    'schoolName': '上海市浦东新区龚路幼儿园（龚华部）（永华部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '打虎山路幼儿园': {
    'schoolName': '打虎山路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区七宝中心幼儿园': {
    'schoolName': '闵行区七宝中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '国和二村幼稚园': {
    'schoolName': '国和二村幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '控江四村幼儿园': {
    'schoolName': '控江四村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区七宝中心幼儿园佳宝分园': {
    'schoolName': '闵行区七宝中心幼儿园佳宝分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '国定路幼儿园': {
    'schoolName': '国定路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '白玉新村幼儿园分园': {
    'schoolName': '白玉新村幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区七宝中心幼儿园叠彩分园': {
    'schoolName': '闵行区七宝中心幼儿园叠彩分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区七宝中心幼儿园广海分园': {
    'schoolName': '闵行区七宝中心幼儿园广海分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '城市花园幼儿园': {
    'schoolName': '城市花园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区七宝中心幼儿园莱茵分园': {
    'schoolName': '闵行区七宝中心幼儿园莱茵分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区康桥第三幼儿园': {
    'schoolName': '上海市浦东新区康桥第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '益思幼儿园': {
    'schoolName': '益思幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区佳佳中心幼儿园': {
    'schoolName': '闵行区佳佳中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区康桥第二幼儿园（康弘部）': {
    'schoolName': '上海市浦东新区康桥第二幼儿园（康弘部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区康桥第二幼儿园（拯安部）': {
    'schoolName': '上海市浦东新区康桥第二幼儿园（拯安部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '盛华幼儿园': {
    'schoolName': '盛华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '复兴中路第二幼儿园': {
    'schoolName': '复兴中路第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区华漕镇纪王幼儿园银杏分园': {
    'schoolName': '闵行区华漕镇纪王幼儿园银杏分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '文庙路幼儿园': {
    'schoolName': '文庙路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区吴泾第一幼儿园剑川分园': {
    'schoolName': '闵行区吴泾第一幼儿园剑川分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区吴泾第一幼儿园永德分园': {
    'schoolName': '闵行区吴泾第一幼儿园永德分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区吴泾第三幼儿园': {
    'schoolName': '闵行区吴泾第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区南六幼儿园    （南季部）  （宏宣部） ': {
    'schoolName': '上海市浦东新区南六幼儿园    （南季部）  （宏宣部） ',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '真如翠英幼儿园(南园)（北园）': {
    'schoolName': '真如翠英幼儿园(南园)（北园）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '夏雨幼儿园': {
    'schoolName': '夏雨幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '瞿溪路幼儿园': {
    'schoolName': '瞿溪路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '石岚新村幼儿园': {
    'schoolName': '石岚新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区景谷第二幼儿园一分园': {
    'schoolName': '闵行区景谷第二幼儿园一分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区彭镇幼儿园 （云秀部、云汉部）': {
    'schoolName': '上海市浦东新区彭镇幼儿园 （云秀部、云汉部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '大华第一幼儿园': {
    'schoolName': '大华第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区景谷第二幼儿园二分园': {
    'schoolName': '闵行区景谷第二幼儿园二分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区梅陇镇中心幼儿园': {
    'schoolName': '闵行区梅陇镇中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区恒宇幼儿园（杨东部）': {
    'schoolName': '上海市浦东新区恒宇幼儿园（杨东部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '新实验幼儿园': {
    'schoolName': '新实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区梅陇镇中心幼儿园南方分园': {
    'schoolName': '闵行区梅陇镇中心幼儿园南方分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区浦江镇第三幼儿园': {
    'schoolName': '闵行区浦江镇第三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '大渡河路第二幼儿园': {
    'schoolName': '大渡河路第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区浦江镇第三幼儿园浦润分园': {
    'schoolName': '闵行区浦江镇第三幼儿园浦润分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '大风车幼儿园平利园': {
    'schoolName': '大风车幼儿园平利园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区恒宇幼儿园（杨南部）': {
    'schoolName': '上海市浦东新区恒宇幼儿园（杨南部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '闵行区莘松幼儿园': {
    'schoolName': '闵行区莘松幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园'
  },
  '上海市浦东新区民办世纪星证大幼稚园': {
    'schoolName': '上海市浦东新区民办世纪星证大幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海市浦东新区民办爱绿幼儿园': {
    'schoolName': '上海市浦东新区民办爱绿幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海民办胡姬港湾幼儿园': {
    'schoolName': '上海民办胡姬港湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办小风车广洋新景幼儿园': {
    'schoolName': '上海浦东新区民办小风车广洋新景幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办小风车金桥丽都幼儿园': {
    'schoolName': '上海浦东新区民办小风车金桥丽都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办小龙鱼环球幼儿园': {
    'schoolName': '上海浦东新区民办小龙鱼环球幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办建桥好好艺术幼儿园': {
    'schoolName': '上海浦东新区民办建桥好好艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办现代宝贝幼儿园': {
    'schoolName': '上海浦东新区民办现代宝贝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区民办维多利亚幼儿园': {
    'schoolName': '上海浦东新区民办维多利亚幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海浦东新区海富新里城幼儿园': {
    'schoolName': '上海浦东新区海富新里城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海海富龙阳幼儿园': {
    'schoolName': '上海海富龙阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海市民办中芯幼儿园': {
    'schoolName': '上海市民办中芯幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市一级幼儿园（民办）'
  },
  '上海闵行晓苗幼儿园': {
    'schoolName': '上海闵行晓苗幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区莘松第二幼儿园莘松分园': {
    'schoolName': '闵行区莘松第二幼儿园莘松分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '科技逸夫幼儿园': {
    'schoolName': '科技逸夫幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区惠南西门幼儿园（北园）': {
    'schoolName': '上海市浦东新区惠南西门幼儿园（北园）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '好时光-小拇指幼儿园': {
    'schoolName': '好时光-小拇指幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新青浦幼儿园': {
    'schoolName': '新青浦幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区惠南西门幼儿园（南园）': {
    'schoolName': '上海市浦东新区惠南西门幼儿园（南园）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '童欣幼儿园': {
    'schoolName': '童欣幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区懿行幼儿园': {
    'schoolName': '上海市浦东新区懿行幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区龙柏第一幼儿园分园': {
    'schoolName': '闵行区龙柏第一幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区政海幼儿园': {
    'schoolName': '上海市浦东新区政海幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '东兰幼儿园': {
    'schoolName': '东兰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区万科实验幼儿园': {
    'schoolName': '上海市浦东新区万科实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '东安一村幼儿园': {
    'schoolName': '东安一村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区三墩幼儿园（笙安部）': {
    'schoolName': '上海市浦东新区三墩幼儿园（笙安部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '阳光幼儿园': {
    'schoolName': '阳光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '七色花第二艺术幼儿园': {
    'schoolName': '七色花第二艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区上南三村幼儿园': {
    'schoolName': '上海市浦东新区上南三村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '东方剑桥幼儿园': {
    'schoolName': '东方剑桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区康桥第一幼儿园（绿洲部）': {
    'schoolName': '上海市浦东新区康桥第一幼儿园（绿洲部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区上南五村幼儿园': {
    'schoolName': '上海市浦东新区上南五村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '东方幼儿园': {
    'schoolName': '东方幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '宁波路幼儿园': {
    'schoolName': '宁波路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区上钢九村幼儿园': {
    'schoolName': '上海市浦东新区上钢九村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '紫一幼儿园': {
    'schoolName': '紫一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '安琪儿幼儿园': {
    'schoolName': '安琪儿幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '安顺幼儿园': {
    'schoolName': '安顺幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区御青幼儿园': {
    'schoolName': '上海市浦东新区御青幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区下沙幼儿园（下沙部）': {
    'schoolName': '上海市浦东新区下沙幼儿园（下沙部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区下沙幼儿园（学诚部）': {
    'schoolName': '上海市浦东新区下沙幼儿园（学诚部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '红珊瑚幼儿园': {
    'schoolName': '红珊瑚幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '革新路幼儿园': {
    'schoolName': '革新路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '星辰幼儿园': {
    'schoolName': '星辰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '顾村中心幼儿园': {
    'schoolName': '顾村中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行儿童城悦庭幼儿园': {
    'schoolName': '上海市闵行儿童城悦庭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '绿森林幼儿园': {
    'schoolName': '绿森林幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区一品漫城幼儿园': {
    'schoolName': '上海市闵行区一品漫城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '中华路幼儿园': {
    'schoolName': '中华路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '三门路幼儿园': {
    'schoolName': '三门路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '馨佳苑幼儿园': {
    'schoolName': '馨佳苑幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区世纪苑樱桃幼儿园': {
    'schoolName': '上海市闵行区世纪苑樱桃幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '临江幼儿园': {
    'schoolName': '临江幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区新港幼儿园': {
    'schoolName': '上海市浦东新区新港幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区杨思幼儿园': {
    'schoolName': '上海市浦东新区杨思幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区五艺幼儿园': {
    'schoolName': '上海市闵行区五艺幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '罗店镇幼儿园': {
    'schoolName': '罗店镇幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '罗泾中心幼儿园': {
    'schoolName': '罗泾中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区协和阳光幼儿园': {
    'schoolName': '上海市闵行区协和阳光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '乐山幼儿园': {
    'schoolName': '乐山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '马泾桥新村幼儿园': {
    'schoolName': '马泾桥新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '乾溪幼儿园': {
    'schoolName': '乾溪幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区古美阳光幼儿园': {
    'schoolName': '上海市闵行区古美阳光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '高境镇第七幼儿园': {
    'schoolName': '高境镇第七幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区君莲幼儿园春都分园': {
    'schoolName': '上海市闵行区君莲幼儿园春都分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '高境镇第二幼儿园': {
    'schoolName': '高境镇第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '月浦二村幼儿园': {
    'schoolName': '月浦二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '联建幼儿园': {
    'schoolName': '联建幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '高境镇第六幼儿园': {
    'schoolName': '高境镇第六幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '月浦八村幼稚园': {
    'schoolName': '月浦八村幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '高境镇贝贝马艺术幼儿园': {
    'schoolName': '高境镇贝贝马艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区实验幼儿园': {
    'schoolName': '上海市闵行区实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '月浦六村幼儿园': {
    'schoolName': '月浦六村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区汇贤幼儿园': {
    'schoolName': '上海市浦东新区汇贤幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '五联幼儿园': {
    'schoolName': '五联幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区东方尚博幼儿园': {
    'schoolName': '上海市浦东新区东方尚博幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '月浦四村幼儿园': {
    'schoolName': '月浦四村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区新时代幼儿园': {
    'schoolName': '上海市闵行区新时代幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区昆阳幼儿园': {
    'schoolName': '上海市闵行区昆阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区昆阳幼儿园金婴分园': {
    'schoolName': '上海市闵行区昆阳幼儿园金婴分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '位育幼儿园': {
    'schoolName': '位育幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区春申景城幼儿园': {
    'schoolName': '上海市闵行区春申景城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区春申景城幼儿园春申分园': {
    'schoolName': '上海市闵行区春申景城幼儿园春申分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '航华第二幼儿园分园（户籍类）': {
    'schoolName': '航华第二幼儿园分园（户籍类）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海交通大学闵行幼儿园东川分园': {
    'schoolName': '上海交通大学闵行幼儿园东川分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区春申景城幼儿园高兴分园': {
    'schoolName': '上海市闵行区春申景城幼儿园高兴分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区晶华坊幼儿园': {
    'schoolName': '上海市闵行区晶华坊幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '依乐新天地': {
    'schoolName': '依乐新天地',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区晶采坊幼儿园': {
    'schoolName': '上海市闵行区晶采坊幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '依云湾幼儿园': {
    'schoolName': '依云湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区未来宝贝幼儿园': {
    'schoolName': '上海市闵行区未来宝贝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区梅陇金都幼儿园': {
    'schoolName': '上海市闵行区梅陇金都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区海港幼儿园（暂）（丽港部）': {
    'schoolName': '上海市浦东新区海港幼儿园（暂）（丽港部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区梅陇金都幼儿园银泰分园': {
    'schoolName': '上海市闵行区梅陇金都幼儿园银泰分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '保利叶都幼儿园': {
    'schoolName': '保利叶都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区水清路幼儿园名都分园': {
    'schoolName': '上海市闵行区水清路幼儿园名都分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区水清路幼儿园绿茵分园': {
    'schoolName': '上海市闵行区水清路幼儿园绿茵分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '黎平路幼儿园': {
    'schoolName': '黎平路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '杨泰三村幼儿园': {
    'schoolName': '杨泰三村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦江宝邸幼儿园水语分园': {
    'schoolName': '上海市闵行区浦江宝邸幼儿园水语分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '苗苗幼稚园': {
    'schoolName': '苗苗幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '龙华幼儿园': {
    'schoolName': '龙华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '龙华第二幼儿园': {
    'schoolName': '龙华第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦江瑞和城幼儿园': {
    'schoolName': '上海市闵行区浦江瑞和城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '龙南幼儿园': {
    'schoolName': '龙南幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区瓦屑幼儿园（瓦屑部）': {
    'schoolName': '上海市浦东新区瓦屑幼儿园（瓦屑部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '杨行中心幼儿园': {
    'schoolName': '杨行中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '杭州路第二幼儿园': {
    'schoolName': '杭州路第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦江闸航路幼儿园': {
    'schoolName': '上海市闵行区浦江闸航路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '龙江幼儿园': {
    'schoolName': '龙江幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦航幼儿园': {
    'schoolName': '上海市闵行区浦航幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦航幼儿园中城分园': {
    'schoolName': '上海市闵行区浦航幼儿园中城分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦莲幼儿园': {
    'schoolName': '上海市闵行区浦莲幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区浦莲幼儿园佳兴分园': {
    'schoolName': '上海市闵行区浦莲幼儿园佳兴分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '枫林幼儿园': {
    'schoolName': '枫林幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区爱博幼儿园': {
    'schoolName': '上海市闵行区爱博幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '桂平幼儿园': {
    'schoolName': '桂平幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区罗阳河畔幼儿园分园': {
    'schoolName': '上海市闵行区罗阳河畔幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '兰溪路幼儿园': {
    'schoolName': '兰溪路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '宝钢九村幼儿园': {
    'schoolName': '宝钢九村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '内江新村幼儿园': {
    'schoolName': '内江新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '密山幼儿园': {
    'schoolName': '密山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '菲贝儿幼稚园': {
    'schoolName': '菲贝儿幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区瓦屑幼儿园（瑞和部）': {
    'schoolName': '上海市浦东新区瓦屑幼儿园（瑞和部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '梅陇第二幼儿园': {
    'schoolName': '梅陇第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区莘庄第二幼儿园清馨分园': {
    'schoolName': '上海市闵行区莘庄第二幼儿园清馨分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '凤南新村幼儿园': {
    'schoolName': '凤南新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区罗山幼儿园': {
    'schoolName': '上海市浦东新区罗山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区莘庄第二幼儿园莘中分园': {
    'schoolName': '上海市闵行区莘庄第二幼儿园莘中分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '小百花幼稚园': {
    'schoolName': '小百花幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '樱花园幼儿园': {
    'schoolName': '樱花园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '刘行中心幼儿园': {
    'schoolName': '刘行中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虎林路幼儿园': {
    'schoolName': '虎林路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '武宁新村幼儿园': {
    'schoolName': '武宁新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区丰镇第一幼儿园': {
    'schoolName': '虹口区丰镇第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '北三幼儿园': {
    'schoolName': '北三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '小红帆幼儿园昌化分园': {
    'schoolName': '小红帆幼儿园昌化分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区闵行第四幼儿园新闵分园': {
    'schoolName': '上海市闵行区闵行第四幼儿园新闵分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区九龙路幼儿园': {
    'schoolName': '虹口区九龙路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '北四幼儿园': {
    'schoolName': '北四幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区侨红幼儿园': {
    'schoolName': '虹口区侨红幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区闵行第四幼儿园荣华分园': {
    'schoolName': '上海市闵行区闵行第四幼儿园荣华分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '北岸郡庭幼儿园': {
    'schoolName': '北岸郡庭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '毓秀幼儿园': {
    'schoolName': '毓秀幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区傅雷幼儿园': {
    'schoolName': '上海市浦东新区傅雷幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '毓秀第二幼儿园': {
    'schoolName': '毓秀第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区颛桥镇幼儿园繁盛分园': {
    'schoolName': '上海市闵行区颛桥镇幼儿园繁盛分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '小雨点幼儿园': {
    'schoolName': '小雨点幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区同心路幼儿园': {
    'schoolName': '虹口区同心路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区多伦路幼儿园': {
    'schoolName': '虹口区多伦路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区颛桥镇田园都市幼儿园': {
    'schoolName': '上海市闵行区颛桥镇田园都市幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '民治路幼稚园': {
    'schoolName': '民治路幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区大连新村幼儿园': {
    'schoolName': '虹口区大连新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '水丰路幼儿园': {
    'schoolName': '水丰路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区小海星幼儿园': {
    'schoolName': '虹口区小海星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区颛溪幼儿园': {
    'schoolName': '上海市闵行区颛溪幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '永清二村幼儿园': {
    'schoolName': '永清二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区广中路幼儿园': {
    'schoolName': '虹口区广中路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '山海幼儿园': {
    'schoolName': '山海幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '永清幼儿园': {
    'schoolName': '永清幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区新乡幼儿园': {
    'schoolName': '虹口区新乡幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区马桥启英幼儿园': {
    'schoolName': '上海市闵行区马桥启英幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区新港幼儿园': {
    'schoolName': '虹口区新港幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '汇家幼儿园': {
    'schoolName': '汇家幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区马桥富卓幼儿园': {
    'schoolName': '上海市闵行区马桥富卓幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区马桥富国幼儿园': {
    'schoolName': '上海市闵行区马桥富国幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区曲阳第二幼儿园': {
    'schoolName': '虹口区曲阳第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区马桥富杰幼儿园': {
    'schoolName': '上海市闵行区马桥富杰幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区曲阳第五幼儿园': {
    'schoolName': '虹口区曲阳第五幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行区马桥富杰幼儿园银康分园': {
    'schoolName': '上海市闵行区马桥富杰幼儿园银康分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区水电路幼儿园': {
    'schoolName': '虹口区水电路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区江湾路幼儿园': {
    'schoolName': '虹口区江湾路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区江西北路幼儿园': {
    'schoolName': '虹口区江西北路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区海门路幼儿园': {
    'schoolName': '虹口区海门路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区花园幼儿园': {
    'schoolName': '虹口区花园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区车站西路幼儿园': {
    'schoolName': '虹口区车站西路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行小星星幼儿园': {
    'schoolName': '上海市闵行小星星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区运光第一幼儿园': {
    'schoolName': '虹口区运光第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行新梅幼儿园': {
    'schoolName': '上海市闵行新梅幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区银联幼儿园': {
    'schoolName': '虹口区银联幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市闵行海丽达春申幼儿园': {
    'schoolName': '上海市闵行海丽达春申幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹口区飞虹路幼儿园': {
    'schoolName': '虹口区飞虹路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '小红帆幼儿园': {
    'schoolName': '小红帆幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹古三幼儿园': {
    'schoolName': '虹古三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '沙浦路幼儿园': {
    'schoolName': '沙浦路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '虹古幼儿园': {
    'schoolName': '虹古幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新苗幼稚园': {
    'schoolName': '新苗幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区南汇实验幼儿园': {
    'schoolName': '上海市浦东新区南汇实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '华建幼儿园': {
    'schoolName': '华建幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '行知幼稚园': {
    'schoolName': '行知幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区南码头幼儿园': {
    'schoolName': '上海市浦东新区南码头幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '泗塘五村幼儿园': {
    'schoolName': '泗塘五村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '平江路幼儿园': {
    'schoolName': '平江路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '泰和新城幼儿园': {
    'schoolName': '泰和新城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '庆华幼儿园': {
    'schoolName': '庆华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区老港幼儿园': {
    'schoolName': '上海市浦东新区老港幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区聚航幼儿园': {
    'schoolName': '上海市浦东新区聚航幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区航头幼儿园（航兴部）': {
    'schoolName': '上海市浦东新区航头幼儿园（航兴部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '康乐第一幼儿园': {
    'schoolName': '康乐第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '许昌路幼儿园': {
    'schoolName': '许昌路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区航头幼儿园（长达部）': {
    'schoolName': '上海市浦东新区航头幼儿园（长达部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '许昌路第二幼儿园': {
    'schoolName': '许昌路第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区航津幼儿园': {
    'schoolName': '上海市浦东新区航津幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '康桥水都幼儿园': {
    'schoolName': '康桥水都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '康沁幼儿园': {
    'schoolName': '康沁幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '贝贝佳双语幼儿园': {
    'schoolName': '贝贝佳双语幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区荡湾幼儿园': {
    'schoolName': '上海市浦东新区荡湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '浦东新区三林镇中心幼儿园': {
    'schoolName': '浦东新区三林镇中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区观海幼儿园': {
    'schoolName': '上海市浦东新区观海幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '通河二村幼儿园': {
    'schoolName': '通河二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '友谊家园幼儿园': {
    'schoolName': '友谊家园幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '友谊新村幼儿园': {
    'schoolName': '友谊新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '古一幼儿园': {
    'schoolName': '古一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '海滨幼稚园': {
    'schoolName': '海滨幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '叮咚幼稚园': {
    'schoolName': '叮咚幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '海贝尔幼儿园': {
    'schoolName': '海贝尔幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '金苹果幼儿园': {
    'schoolName': '金苹果幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '清河湾幼儿园': {
    'schoolName': '清河湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '金钟幼儿园': {
    'schoolName': '金钟幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '漕溪新村幼儿园': {
    'schoolName': '漕溪新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区小叮当幼儿园': {
    'schoolName': '上海市浦东新区小叮当幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '爱国幼儿园': {
    'schoolName': '爱国幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '锦秋幼儿园': {
    'schoolName': '锦秋幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '爱童幼儿园': {
    'schoolName': '爱童幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海浦东新区云瑞幼儿园': {
    'schoolName': '上海浦东新区云瑞幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '忆华里幼儿园': {
    'schoolName': '忆华里幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '牡丹江路幼儿园': {
    'schoolName': '牡丹江路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '锦西幼儿园': {
    'schoolName': '锦西幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长三幼儿园': {
    'schoolName': '长三幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长华幼儿园': {
    'schoolName': '长华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '呼玛二村幼儿园': {
    'schoolName': '呼玛二村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '和家欣苑幼儿园': {
    'schoolName': '和家欣苑幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长岭路幼儿园': {
    'schoolName': '长岭路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '甘泉新村幼儿园分园': {
    'schoolName': '甘泉新村幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长征新村幼儿园': {
    'schoolName': '长征新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长桥第一幼儿园': {
    'schoolName': '长桥第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '四季花城幼儿园': {
    'schoolName': '四季花城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长桥第二幼儿园': {
    'schoolName': '长桥第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长江路幼儿园': {
    'schoolName': '长江路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '申花幼儿园': {
    'schoolName': '申花幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '长海幼儿园': {
    'schoolName': '长海幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '慧华幼儿园': {
    'schoolName': '慧华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '白城幼儿园': {
    'schoolName': '白城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区世纪昂立幼儿园': {
    'schoolName': '上海闵行区世纪昂立幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '白天鹅幼儿园': {
    'schoolName': '白天鹅幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区康桥第一幼儿园（梓康部）': {
    'schoolName': '上海市浦东新区康桥第一幼儿园（梓康部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区东方剑桥幼儿园': {
    'schoolName': '上海闵行区东方剑桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '国和一村幼儿园': {
    'schoolName': '国和一村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '白天鹅幼儿园白丽分园': {
    'schoolName': '白天鹅幼儿园白丽分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区今明幼儿园': {
    'schoolName': '上海闵行区今明幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区今明莲浦幼稚园': {
    'schoolName': '上海闵行区今明莲浦幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区伊顿慧智金汇豪庭幼儿园': {
    'schoolName': '上海闵行区伊顿慧智金汇豪庭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区佳佳新天地幼儿园': {
    'schoolName': '上海闵行区佳佳新天地幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '城市实验幼儿园': {
    'schoolName': '城市实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '政通路幼儿': {
    'schoolName': '政通路幼儿',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区刘诗昆音乐艺术幼儿园': {
    'schoolName': '上海闵行区刘诗昆音乐艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '盈星幼儿园': {
    'schoolName': '盈星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区协和海富幼儿园': {
    'schoolName': '上海闵行区协和海富幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区南希幼儿园': {
    'schoolName': '上海闵行区南希幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '盘古幼儿园': {
    'schoolName': '盘古幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区博爱满庭芳幼儿园': {
    'schoolName': '上海闵行区博爱满庭芳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '盛桥新村幼儿园': {
    'schoolName': '盛桥新村幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区博闻幼儿园': {
    'schoolName': '上海闵行区博闻幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区启英茂盛幼稚园': {
    'schoolName': '上海闵行区启英茂盛幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '真光幼儿园分园': {
    'schoolName': '真光幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区哈哈幼稚园': {
    'schoolName': '上海闵行区哈哈幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区哈弗士幼儿园': {
    'schoolName': '上海闵行区哈弗士幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '真华幼儿园': {
    'schoolName': '真华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区吴泾第二幼儿园': {
    'schoolName': '闵行区吴泾第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区嘟嘟幼儿园': {
    'schoolName': '上海闵行区嘟嘟幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新世纪静安新城幼儿园(仅持产证累)': {
    'schoolName': '新世纪静安新城幼儿园(仅持产证累)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区嘟嘟雅歌幼儿园': {
    'schoolName': '上海闵行区嘟嘟雅歌幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新乐幼儿园': {
    'schoolName': '新乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区圣陶沙幼儿园': {
    'schoolName': '上海闵行区圣陶沙幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区小红帽艺术幼儿园': {
    'schoolName': '上海闵行区小红帽艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区小蝌蚪音乐幼儿园': {
    'schoolName': '上海闵行区小蝌蚪音乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新剑幼儿园': {
    'schoolName': '新剑幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区新华幼儿园': {
    'schoolName': '闵行区新华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区尚德坤庭幼儿园': {
    'schoolName': '上海闵行区尚德坤庭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '新华幼儿园': {
    'schoolName': '新华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区景谷第一幼儿园': {
    'schoolName': '闵行区景谷第一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区摩根亨利幼儿园': {
    'schoolName': '上海闵行区摩根亨利幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '大华二幼': {
    'schoolName': '大华二幼',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区新世纪虹莘幼稚园': {
    'schoolName': '上海闵行区新世纪虹莘幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区星光幼儿园': {
    'schoolName': '上海闵行区星光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区曹行中心幼儿园': {
    'schoolName': '闵行区曹行中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区望族苑幼稚园': {
    'schoolName': '上海闵行区望族苑幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '大同幼儿园': {
    'schoolName': '大同幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区曹行中心幼儿园蔷薇分园': {
    'schoolName': '闵行区曹行中心幼儿园蔷薇分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区江南海粟幼稚园': {
    'schoolName': '上海闵行区江南海粟幼稚园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '祁连中心幼儿园': {
    'schoolName': '祁连中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区浦江之星幼儿园': {
    'schoolName': '上海闵行区浦江之星幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区梅陇镇中心幼儿园二村分园': {
    'schoolName': '闵行区梅陇镇中心幼儿园二村分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区私立蒙特梭利幼儿园': {
    'schoolName': '上海闵行区私立蒙特梭利幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '大昌幼儿园': {
    'schoolName': '大昌幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区蒙氏蔚蓝幼儿园': {
    'schoolName': '上海闵行区蒙氏蔚蓝幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区贺绿汀幼儿园': {
    'schoolName': '上海闵行区贺绿汀幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区金孔雀幼儿园': {
    'schoolName': '上海闵行区金孔雀幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区阶梯吉美幼儿园': {
    'schoolName': '上海闵行区阶梯吉美幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区颛桥镇日月华亭幼儿园': {
    'schoolName': '上海闵行区颛桥镇日月华亭幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '闵行区航华第二幼儿园分园': {
    'schoolName': '闵行区航华第二幼儿园分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海闵行区鹤琴爱真幼儿园': {
    'schoolName': '上海闵行区鹤琴爱真幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '秀泉幼儿园': {
    'schoolName': '秀泉幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '上海市浦东新区天池幼儿园': {
    'schoolName': '上海市浦东新区天池幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市二级幼儿园'
  },
  '童的梦艺术幼儿园': {
    'schoolName': '童的梦艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '威海路幼儿园': {
    'schoolName': '威海路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '童的梦艺术幼儿园颐和分园、万里分园、中浩云分园': {
    'schoolName': '童的梦艺术幼儿园颐和分园、万里分园、中浩云分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '星光幼儿园': {
    'schoolName': '星光幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市金汇实验幼儿园': {
    'schoolName': '上海市金汇实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '音乐幼儿园': {
    'schoolName': '音乐幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东南幼儿园（东南部）': {
    'schoolName': '上海市浦东新区东南幼儿园（东南部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '绿洲幼儿园': {
    'schoolName': '绿洲幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '绿洲幼儿园长风生态分园': {
    'schoolName': '绿洲幼儿园长风生态分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东南幼儿园（圣鑫部）': {
    'schoolName': '上海市浦东新区东南幼儿园（圣鑫部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东南幼儿园（御沁部）': {
    'schoolName': '上海市浦东新区东南幼儿园（御沁部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区浦南幼儿园（东城部）': {
    'schoolName': '上海市浦东新区浦南幼儿园（东城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东方幼儿园（唐城部）': {
    'schoolName': '上海市浦东新区东方幼儿园（唐城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区浦南幼儿园（锦和部）': {
    'schoolName': '上海市浦东新区浦南幼儿园（锦和部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东方幼儿园（联洋部、丁香部、仁恒部）': {
    'schoolName': '上海市浦东新区东方幼儿园（联洋部、丁香部、仁恒部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区浦南幼儿园（陆家嘴部）': {
    'schoolName': '上海市浦东新区浦南幼儿园（陆家嘴部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东方幼儿园（诚礼部）': {
    'schoolName': '上海市浦东新区东方幼儿园（诚礼部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '本溪路幼儿园': {
    'schoolName': '本溪路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '佳佳幼儿园': {
    'schoolName': '佳佳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '芷江中路幼儿园': {
    'schoolName': '芷江中路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '儿童世界基金会普陀幼儿园': {
    'schoolName': '儿童世界基金会普陀幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '儿童世界基金会普陀幼儿园古浪分园': {
    'schoolName': '儿童世界基金会普陀幼儿园古浪分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '荷花池幼儿园': {
    'schoolName': '荷花池幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '荷花池幼儿园（海珀部）': {
    'schoolName': '荷花池幼儿园（海珀部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '实验幼儿园': {
    'schoolName': '实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市闵行区莘庄幼儿园': {
    'schoolName': '上海市闵行区莘庄幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市闵行区莘庄幼儿园平阳分园': {
    'schoolName': '上海市闵行区莘庄幼儿园平阳分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '蓬莱路幼儿园': {
    'schoolName': '蓬莱路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市南阳实验幼儿园': {
    'schoolName': '上海市南阳实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '小天鹅幼儿园': {
    'schoolName': '小天鹅幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '蓬莱路幼儿园（中福部）': {
    'schoolName': '蓬莱路幼儿园（中福部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市闵行区虹鹿幼儿园': {
    'schoolName': '上海市闵行区虹鹿幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市闵行区虹鹿幼儿园井亭分园': {
    'schoolName': '上海市闵行区虹鹿幼儿园井亭分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区冰厂田幼儿园（世纪部）': {
    'schoolName': '上海市浦东新区冰厂田幼儿园（世纪部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区冰厂田幼儿园（商城部）': {
    'schoolName': '上海市浦东新区冰厂田幼儿园（商城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区冰厂田幼儿园（碧云部）': {
    'schoolName': '上海市浦东新区冰厂田幼儿园（碧云部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市实验幼儿园': {
    'schoolName': '上海市实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市实验幼儿园阳光分园': {
    'schoolName': '上海市实验幼儿园阳光分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区南门幼儿园 (城南部、广夏部）': {
    'schoolName': '上海市浦东新区南门幼儿园 (城南部、广夏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区南门幼儿园（华贵部）': {
    'schoolName': '上海市浦东新区南门幼儿园（华贵部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区南门幼儿园（张江部）': {
    'schoolName': '上海市浦东新区南门幼儿园（张江部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '延吉幼儿园': {
    'schoolName': '延吉幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区蒲公英幼儿园(欧洲城部)': {
    'schoolName': '上海市浦东新区蒲公英幼儿园(欧洲城部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区蒲公英幼儿园(金桥湾部、彩虹岛部)': {
    'schoolName': '上海市浦东新区蒲公英幼儿园(金桥湾部、彩虹岛部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区蒲公英幼儿园(高东堡部)': {
    'schoolName': '上海市浦东新区蒲公英幼儿园(高东堡部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '南西幼儿园': {
    'schoolName': '南西幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '建青幼儿园': {
    'schoolName': '建青幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区金童幼儿园（东波部）': {
    'schoolName': '上海市浦东新区金童幼儿园（东波部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区金童幼儿园（明月部）': {
    'schoolName': '上海市浦东新区金童幼儿园（明月部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区金童幼儿园（金桥部、云山部）': {
    'schoolName': '上海市浦东新区金童幼儿园（金桥部、云山部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '徐悲鸿艺术幼儿园': {
    'schoolName': '徐悲鸿艺术幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海市浦东新区东南幼儿园（华庭部）': {
    'schoolName': '上海市浦东新区东南幼儿园（华庭部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '思南路幼儿园': {
    'schoolName': '思南路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '思南路幼儿园（南部）': {
    'schoolName': '思南路幼儿园（南部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '瑞金一路幼儿园': {
    'schoolName': '瑞金一路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '愚一幼儿园': {
    'schoolName': '愚一幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '控江幼儿园': {
    'schoolName': '控江幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '上海闵行区依霖幼儿园': {
    'schoolName': '上海闵行区依霖幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '天山幼儿园': {
    'schoolName': '天山幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '上海市示范幼儿园'
  },
  '秀涓幼儿园': {
    'schoolName': '秀涓幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '罗泾第二幼儿园': {
    'schoolName': '罗泾第二幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区民办↵建业大地幼儿园': {
    'schoolName': '上海市浦东新区民办↵建业大地幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区民办小博士幼儿园': {
    'schoolName': '上海市浦东新区民办小博士幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区民办小龙鱼金樟幼儿园': {
    'schoolName': '上海市浦东新区民办小龙鱼金樟幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区民办御桥幼儿园': {
    'schoolName': '上海市浦东新区民办御桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区民办海富金太阳幼儿园': {
    'schoolName': '上海市浦东新区民办海富金太阳幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '月浦博爱幼儿园': {
    'schoolName': '月浦博爱幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '本溪实验幼儿园': {
    'schoolName': '本溪实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市儿童世界基金文学幼儿园': {
    'schoolName': '上海市儿童世界基金文学幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '菊华幼儿园': {
    'schoolName': '菊华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市浦东新区百熙幼儿园【5-122号】': {
    'schoolName': '上海市浦东新区百熙幼儿园【5-122号】',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '崧润幼儿园': {
    'schoolName': '崧润幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海市闵行区鹤庆幼儿园北欧分园': {
    'schoolName': '上海市闵行区鹤庆幼儿园北欧分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '虹桥二路幼儿园': {
    'schoolName': '虹桥二路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '海尚明城幼儿园': {
    'schoolName': '海尚明城幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海春光艺术实验幼儿园': {
    'schoolName': '上海春光艺术实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '御澜湾幼儿园': {
    'schoolName': '御澜湾幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海民办嘉臣名都幼儿园': {
    'schoolName': '上海民办嘉臣名都幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办↵大华锦绣爱绿幼儿园': {
    'schoolName': '上海浦东新区民办↵大华锦绣爱绿幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办世纪昂立幼儿园': {
    'schoolName': '上海浦东新区民办世纪昂立幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办东方剑桥幼儿园': {
    'schoolName': '上海浦东新区民办东方剑桥幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办同汇幼儿园': {
    'schoolName': '上海浦东新区民办同汇幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办小风车幼儿园': {
    'schoolName': '上海浦东新区民办小风车幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '思源幼儿园': {
    'schoolName': '思源幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办紫华中意幼儿园': {
    'schoolName': '上海浦东新区民办紫华中意幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上海浦东新区民办贝贝树幼儿园': {
    'schoolName': '上海浦东新区民办贝贝树幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '闵行区七宝中心幼儿园万泰分园': {
    'schoolName': '闵行区七宝中心幼儿园万泰分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '闵行区华漕镇中心幼儿园': {
    'schoolName': '闵行区华漕镇中心幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '祁华幼儿园': {
    'schoolName': '祁华幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '其他'
  },
  '上钢新村幼儿园（海贝部）': {
    'schoolName': '上钢新村幼儿园（海贝部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区张江经典幼儿园[1-1100对口】': {
    'schoolName': '上海市浦东新区张江经典幼儿园[1-1100对口】',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区上钢新村幼儿园（新村部）': {
    'schoolName': '上海市浦东新区上钢新村幼儿园（新村部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '宝山区庙行实验幼儿园': {
    'schoolName': '宝山区庙行实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东园幼儿园（东昌部）': {
    'schoolName': '上海市浦东新区东园幼儿园（东昌部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东园幼儿园（商城部）': {
    'schoolName': '上海市浦东新区东园幼儿园（商城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区潼江幼儿园 （港城部）': {
    'schoolName': '上海市浦东新区潼江幼儿园 （港城部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区澧溪幼儿园（澧溪部、万达部）1-6对口】': {
    'schoolName': '上海市浦东新区澧溪幼儿园（澧溪部、万达部）1-6对口】',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区澧溪幼儿园（澧溪部、万达部）': {
    'schoolName': '上海市浦东新区澧溪幼儿园（澧溪部、万达部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区潼江幼儿园 （新村部）': {
    'schoolName': '上海市浦东新区潼江幼儿园 （新村部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区澧溪幼儿园（瑞阳部）': {
    'schoolName': '上海市浦东新区澧溪幼儿园（瑞阳部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区潼江幼儿园 （潼江部）': {
    'schoolName': '上海市浦东新区潼江幼儿园 （潼江部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区百灵鸟幼儿园（阳光部）': {
    'schoolName': '上海市浦东新区百灵鸟幼儿园（阳光部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东昌幼儿园（丽苑部）': {
    'schoolName': '上海市浦东新区东昌幼儿园（丽苑部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东昌幼儿园（地杰部）': {
    'schoolName': '上海市浦东新区东昌幼儿园（地杰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东昌幼儿园（恬园部）': {
    'schoolName': '上海市浦东新区东昌幼儿园（恬园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东沟幼儿园（新行校区）': {
    'schoolName': '上海市浦东新区东沟幼儿园（新行校区）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东沟幼儿园（浦煤校区-中大班)(东靖校区-小班）': {
    'schoolName': '上海市浦东新区东沟幼儿园（浦煤校区-中大班)(东靖校区-小班）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东港幼儿园': {
    'schoolName': '上海市浦东新区东港幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区澧溪幼儿园（澧溪部、万达部）【88号】': {
    'schoolName': '上海市浦东新区澧溪幼儿园（澧溪部、万达部）【88号】',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区东蕾幼儿园（凌河部、博兴部、金鹏部）': {
    'schoolName': '上海市浦东新区东蕾幼儿园（凌河部、博兴部、金鹏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区牡丹幼儿园 （总部、大唐部）': {
    'schoolName': '上海市浦东新区牡丹幼儿园 （总部、大唐部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区临沂八村幼儿园 （绿洲部）   ': {
    'schoolName': '上海市浦东新区临沂八村幼儿园 （绿洲部）   ',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区临沂八村幼儿园 （金谊部）': {
    'schoolName': '上海市浦东新区临沂八村幼儿园 （金谊部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区云台幼儿园（云台部）': {
    'schoolName': '上海市浦东新区云台幼儿园（云台部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区百灵鸟幼儿园（陆洋部)': {
    'schoolName': '上海市浦东新区百灵鸟幼儿园（陆洋部)',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区云台幼儿园（云天部）': {
    'schoolName': '上海市浦东新区云台幼儿园（云天部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区云台幼儿园（云海部）': {
    'schoolName': '上海市浦东新区云台幼儿园（云海部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区金囡幼儿园（苗圃部）': {
    'schoolName': '上海市浦东新区金囡幼儿园（苗圃部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区六一幼儿园（万邦部）': {
    'schoolName': '上海市浦东新区六一幼儿园（万邦部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区六一幼儿园（海桐部）': {
    'schoolName': '上海市浦东新区六一幼儿园（海桐部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区六一幼儿园（芳草部）': {
    'schoolName': '上海市浦东新区六一幼儿园（芳草部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区北蔡幼儿园（五星部）': {
    'schoolName': '上海市浦东新区北蔡幼儿园（五星部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区北蔡幼儿园（莲园部）': {
    'schoolName': '上海市浦东新区北蔡幼儿园（莲园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区听潮艺术幼儿园（北园部）': {
    'schoolName': '上海市浦东新区听潮艺术幼儿园（北园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区听潮艺术幼儿园（南园部）': {
    'schoolName': '上海市浦东新区听潮艺术幼儿园（南园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区听潮艺术幼儿园（香桂部）': {
    'schoolName': '上海市浦东新区听潮艺术幼儿园（香桂部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区园西幼儿园（临丰部）': {
    'schoolName': '上海市浦东新区园西幼儿园（临丰部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区园西幼儿园（华馨部）': {
    'schoolName': '上海市浦东新区园西幼儿园（华馨部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区园西幼儿园（园西部、临园部）': {
    'schoolName': '上海市浦东新区园西幼儿园（园西部、临园部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区西门幼儿园（妙川部）': {
    'schoolName': '上海市浦东新区西门幼儿园（妙川部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区西门幼儿园（广厦部、妙境部）': {
    'schoolName': '上海市浦东新区西门幼儿园（广厦部、妙境部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区金囡幼儿园（沈家弄部）': {
    'schoolName': '上海市浦东新区金囡幼儿园（沈家弄部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区金囡幼儿园（瑞仕部）': {
    'schoolName': '上海市浦东新区金囡幼儿园（瑞仕部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区锦绣博文幼儿园': {
    'schoolName': '上海市浦东新区锦绣博文幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区靖海之星幼儿园（听云部）': {
    'schoolName': '上海市浦东新区靖海之星幼儿园（听云部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区靖海之星幼儿园（桃源部）': {
    'schoolName': '上海市浦东新区靖海之星幼儿园（桃源部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区靖海之星幼儿园（靖海部）': {
    'schoolName': '上海市浦东新区靖海之星幼儿园（靖海部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区顾路幼儿园 （安基部）': {
    'schoolName': '上海市浦东新区顾路幼儿园 （安基部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区小天鹅幼儿园': {
    'schoolName': '上海市浦东新区小天鹅幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区顾路幼儿园 （海鹏部）': {
    'schoolName': '上海市浦东新区顾路幼儿园 （海鹏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区顾路幼儿园 （顾路部）': {
    'schoolName': '上海市浦东新区顾路幼儿园 （顾路部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区顾路幼儿园（金群部）': {
    'schoolName': '上海市浦东新区顾路幼儿园（金群部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区小螺号幼儿园（羽山部）': {
    'schoolName': '上海市浦东新区小螺号幼儿园（羽山部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区小螺号幼儿园（黄山部、德平部）': {
    'schoolName': '上海市浦东新区小螺号幼儿园（黄山部、德平部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区齐河幼儿园': {
    'schoolName': '上海市浦东新区齐河幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '基金会幼儿园': {
    'schoolName': '基金会幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '闵行区佳佳中心幼儿园联东分园': {
    'schoolName': '闵行区佳佳中心幼儿园联东分园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区开心幼儿园（江镇部）': {
    'schoolName': '上海市浦东新区开心幼儿园（江镇部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区开心幼儿园（祝桥部）': {
    'schoolName': '上海市浦东新区开心幼儿园（祝桥部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区张江经典幼儿园': {
    'schoolName': '上海市浦东新区张江经典幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区张江经典幼儿园（古桐部）': {
    'schoolName': '上海市浦东新区张江经典幼儿园（古桐部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区张江经典幼儿园（盛夏部）': {
    'schoolName': '上海市浦东新区张江经典幼儿园（盛夏部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区张江经典幼儿园（经典部）': {
    'schoolName': '上海市浦东新区张江经典幼儿园（经典部）',
    'schoolType': '幼儿园',
    'echelonPerformance': '区示范幼儿园'
  },
  '上海市浦东新区康梧幼儿园': {
    'schoolName': '上海市浦东新区康梧幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '新开园'
  },
  '美安路幼儿园': {
    'schoolName': '美安路幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '新开园'
  },
  '菊泉实验幼儿园': {
    'schoolName': '菊泉实验幼儿园',
    'schoolType': '幼儿园',
    'echelonPerformance': '新开园'
  }
}
