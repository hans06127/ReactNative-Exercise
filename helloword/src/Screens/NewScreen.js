import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons/build/Icons';

const news = [
  {
    title: '工具機銷售慘、Brother砍財測；股價無懼、衝半年高',
    datetime: '2019-11-06 08:35:12',
    imageUrl: 'https://www.moneydj.com/z/sjn/jpg/GetNewsRptjpg.djjpg?a=219314',
    content: '日本工具機、縫紉機及印表機大廠brother industries 5日於日股盤後發布新聞稿宣布，因美中貿易摩擦激化等因素影響，導致設備投資需求低迷，造成包含工具機在內的「機械事業」業績恐大幅遜於原先預期，因此今年度(2019年度、2019年4月-2020年3月)合併營收目標自原先預估的6,900億日圓下修至6,420億日圓、合併營益目標自650億日圓下修至605億日圓、合併純益目標也自485億日圓下修至445億日圓。日經新聞報導，關於工具機訂單展望，brother社長佐佐木一郎於5日舉行的財報說明會上表示，「不能說可在短期內急速回復，但期待自2020年度起可以一點一點回復」。brother同時公布今年度上半年(2019年4-9月)財報：因工具機銷售驟減，拖累合併營收較去年同期萎縮7.3%至3,184.87億日圓、合併營益下滑4.0%至365.26億日圓、合併純益下滑4.5%至272.75億日圓。4-9月期間brother「機械事業(包含工業用縫紉機和工具機等產品)」營收較去年同期大減33.7%至393.14億日圓、營益驟減87.7%至8.89億日圓；其中，產業機器(工具機)營收較去年同期驟減51.2%至161.86億日圓、工業用縫紉機下滑11.5%至143.72億日圓。borther指出，工具機銷售大減主要是因為車用、一般機械用需求低迷，加上it用需求幾乎沒有。4-9月期間brother「印刷解決方案事業(包含印表機、事務機等產品)」營收較去年同期下滑2.7%至1,932.46億日圓、營益成長18.5%至311.08億日圓。根據yahoo finance的報價顯示，截至台北時間6日上午8點25分為止，brother大漲3.0%至2,128日圓，稍早最高漲至2,148日圓、創半年來(5月7日以來)新高水準；今年迄今brother股價大漲約31%。日本工具機工業會(japan machine tool builders` association；jmtba)10月25日公布統計數據指出，因美中貿易摩擦影響、導致來自中國的訂單創近3年來新低，拖累2019年9月份日本工具機(machine tool)整體訂單金額(最終值、內銷+外銷)較去年同月大減35.5%至989億日圓，連續第12個月陷入萎縮，月訂單額連續第2個月低於顯示接單狀況好壞界線的1,000億日圓大關。就外銷訂單來看，9月份日本來自中國(銷往中國)的工具機訂單額較去年同月驟減42.1%至109億日圓，連續第19個月陷入萎縮，月訂單額創近3年來(2016年10月以來、當月為100.5億日圓)新低紀錄。9月份日本來自北美的工具機訂單額較去年同月下滑44.4%至182億日圓；歐洲訂單額大減32.6%至136億日圓、其中德國訂單額驟減57.1%至25億日圓(創今年來新低水準)。＊編者按：本文僅供參考之用，並不構成要約、招攬或邀請、誘使、任何不論種類或形式之申述或訂立任何建議及推薦，讀者務請運用個人獨立思考能力，自行作出投資決定，如因相關建議招致損失，概與《精實財經媒體》、編者及作者無涉。',
    id: '27ED9496-7937-4321-B350-76F46A784368'
  }
  ,
  {
    title: '在岸人幣升破7！專家謹慎：陸經濟病急 若無協議恐競貶',
    datetime: '2019-11-06 08:31:36',
    imageUrl: 'https://www.moneydj.com/z/sjn/png/GetNewsRptpng.djpng?a=160658',
    content: '在市場謠傳美國考慮取消部分中國輸美出口品關稅的激勵下，在岸人民幣週二(11月5日)飛越7兌換一美元整數大關，為8月5日以來首見。嘉實xq全球贏家系統報價顯示，美元兌在岸人民幣5日尾盤貶值0.31%至7.0081；盤中最低一度貶至6.9875、創8月5日以來盤中新低。政論雜誌《politico》4日引述未具名消息人士報導，中國除了要求美國總統川普(donald trump)別在12月中旬開徵新一輪的關稅外，還希望他能解除9月關稅。與此同時，中國國家主席習近平則考慮訪美，簽署第一階段貿易協議。英國金融時報4日稍晚也引述未具名消息人士報導，川普政府官員正在激烈辯論，是否要解除1,120億美元中國輸美出口品9月起面臨的15%關稅，作為簽署階段協議的讓步條件。(詳細內容見此)不過，專家要大家不可過分樂觀，中國經濟趨緩程度益發嚴重、比2015年還要糟，倘若貿易協議遲遲無法達成，北京當局可能會再度促貶人民幣。此話怎講？投資銀行natixis亞太首席經濟學家alicia garcia herrero 5日在金融時報撰文指出，首先，中國國家主席習近平正在對抗企業、金融機構過度槓桿的問題，2015年當局尚未展開經濟去槓桿行動。習大現在打擊的是中小型民企、地產開發商主要融資管道──影子銀行(shadow banking，包括p2p網路貸款、銀行表外的借貸業務、基金經理人展延的信用等)，這會拉高民企融資成本、壓抑經濟成長，導致民企違約率飆高。第二，北京當局刺激經濟的能力，比四年前更有限。受到非洲豬瘟導致通膨壓力飆升的影響，人行的貨幣刺激能力受到限制。不只如此，寬鬆貨幣政策似乎未對實質經濟發揮效用。這從銀行對國企、民企收取的貸款利息就可看得出來，兩者利差正持續擴大中。此外，地方政府債台高築，還面臨人口老化帶來的年金與社福壓力，對於昂貴卻無用的基礎建設益發謹慎。最後，北京當局對資本管控愈來愈得心應手，只要設法減少資本外逃的數量，就算促貶人民幣、也不會出現類似2015年8月外匯存底蒸發數兆美元的問題。最近，中國已經能在促使人民幣貶值之際，設法保住外匯存底。這意味著，北京當局會在必要時鳴槍促貶。在經濟趨緩、振興工具缺乏效力的情況下，倘若中美貿易協議遲遲無法敲定，北京可能會把競貶人民幣當成刺激經濟的唯一手段。編者按：本文僅供參考之用，並不構成要約、招攬或邀請、誘使、任何不論種類或形式之申述或訂立任何建議及推薦，讀者務請運用個人獨立思考能力，自行作出投資決定，如因相關建議招致損失，概與《精實財經媒體》、編者及作者無涉。',
    id: "E09F5FF7-08D2-4F59-A491-AE75BB95AA0B"
  }
]


export default function NewScreen(props) {
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    var data = news
    setDataSource(data)
  })
  const showNewDetail = (cases) => {
    props.navigation.push('NewDeatil', { passProps: cases })
  }

  const renderNews = (cases) => {
    return (
      <TouchableOpacity style={styles.buttonList} onPress={() => showNewDetail(cases)}>
        <View style={styles.MainView}>
          <View style={{ flex: 8, }}>
            <View style={{ padding: 15 }}>
              <Text style={{ fontSize: 16 }} ellipsizeMode="tail" numberOfLines={1}>{cases.title}</Text>
              <Text>{cases.datetime}</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name={'ios-chevron-forward'} size={25} color={'black'} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View>
      <FlatList
        data={dataSource}
        renderItem={cases => renderNews(cases.item)}
        keyExtractor={cases => cases.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonList: {
    borderBottomWidth: 2,
    borderBottomColor: "#B2B2B2",
    marginTop: 10,
    justifyContent: 'center',
    height: 70,
  },
  MainView: {
    flexDirection: 'row',
    alignItems: "center",
  }

});
