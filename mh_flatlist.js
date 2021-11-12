import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import styles from './styles'
import {hoas} from './data/hoa.json';

export class mh_flatlist extends Component {
  render() {
    return (
      <FlatList
        data={hoas}
        keyExtractor={item => item.mahoa}
        renderItem={renderItem}
        ItemSeparatorComponent={Duong}
        pagingEnabled={false}
        ListHeaderComponent={Dautrang}
        ListFooterComponent={Cuoitrang}
      />
    );
  }
}

function renderItem({item}) {
  return (
    <View>
      <Loaihoa  ma={item.mahoa} ten={item.tenhoa} mota={item.mota} hinh={item.hinh} />
    </View>
  );
}

function Loaihoa({ma, ten, mota, hinh}) {
  return (
    <View key={ma}>
      <Text style={styles.tieude}>{ten}</Text>
      <Text style={styles.noidung}>{mota}</Text>
      <Image source={require('./assets/'+ `cho.jpg`)} />
    </View>
  );
}

function Duong() {
  return <View style={styles.duongthang} />;
}

function Dautrang() {
  return (
    <View>
      <Image source={require('./assets/chuot.jpg')} style={styles.dautrang} />
    </View>
  );
}

function Cuoitrang() {
  return (
    <View>
      <Image source={require('./assets/cho.jpg')} style={styles.dautrang} />
    </View>
  );
}
export default mh_flatlist;
