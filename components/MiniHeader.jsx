import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";

const MiniHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>DELIVERY TO</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Text style={styles.address}>Green Way 3000, Sylhet </Text>
          <Avatar.Icon
            style={{ backgroundColor: colors.color1_light }}
            icon={"chevron-down"}
            color={colors.color7}
            size={40}
          />
        </View>
      </View>
      <View>
        <Text style={styles.text}>WITHIN</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Text style={styles.deliveryTime}>1 Hour</Text>
          <Avatar.Icon
            style={{ backgroundColor: colors.color1_light }}
            icon={"chevron-down"}
            color={colors.color7}
            size={40}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "grey",
  },
  address: {
    fontSize: 14,
    color:colors.color7
  },
  deliveryTime: {
    fontSize: 14,color:colors.color7
  },
});

export default MiniHeader;
