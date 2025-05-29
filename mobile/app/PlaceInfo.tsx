import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const PlaceInfo = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        
        {/* Title Bar */}
        <View style={styles.titleBar}>
          <TouchableOpacity style={styles.sideButton} onPress={() => router.back()}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/dneqblap_expires_30_days.png",
              }}
              resizeMode="contain"
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Mekan İsmi</Text>
          </View>

          <View style={styles.sideButton} /> {/* Başlık hizası için boş kutu */}
        </View>

        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/6wny2rz8_expires_30_days.png",
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardDetails}>
              <View style={styles.experienceContainer}>
                <TouchableOpacity style={styles.infoButton} onPress={() => alert("Pressed!")}>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/g0fljq1f_expires_30_days.png",
                    }}
                    style={styles.infoIcon}
                  />
                </TouchableOpacity>
                <View style={styles.experienceText}>
                  <Text style={styles.experienceYears}>15 years</Text>
                  <Text style={styles.experienceDesc}>experience</Text>
                </View>
              </View>
              <View style={styles.focusBox}>
                <Text style={styles.focusText}>
                  Focus: The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders.
                </Text>
              </View>
            </View>
          </View>

          {/* Doctor Info */}
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. Alexander Bennett, Ph.D.</Text>
            <Text style={styles.doctorSpec}>Dermato-Genetics</Text>
          </View>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/ijaav3es_expires_30_days.png",
                }}
                style={styles.statIcon}
              />
              <Text style={styles.statText}>5</Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/oy3eer13_expires_30_days.png",
                }}
                style={styles.statIcon}
              />
              <Text style={styles.statText}>40</Text>
            </View>
            <View style={[styles.statItem, { flex: 1 }]}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/wzhpyz8v_expires_30_days.png",
                }}
                style={styles.statIcon}
              />
              <Text style={[styles.statText, { flex: 1 }]}>
                Mon-Sat / 9:00AM - 5:00PM
              </Text>
            </View>
          </View>

          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/oco0fbvb_expires_30_days.png",
            }}
            style={styles.starIcon}
          />
        </View>

        {/* Sections */}
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text style={styles.sectionTitle}>Career Path</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <Text style={styles.sectionTitle}>Highlights</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  titleBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 18,
    height: 40,
  },
  sideButton: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    width: 12,
    height: 20,
  },
  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#C9D5FF",
    borderRadius: 17,
    paddingVertical: 18,
    marginBottom: 34,
    marginHorizontal: 30,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 22,
  },
  cardImage: {
    width: 139,
    height: 140,
    marginRight: 10,
    borderRadius: 70,
  },
  cardDetails: {
    flex: 1,
  },
  experienceContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#225FFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#225FFF",
    paddingVertical: 3,
    paddingHorizontal: 4,
    marginBottom: 3,
  },
  infoButton: {
    backgroundColor: "#C9D5FF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginRight: 6,
  },
  infoIcon: {
    width: 9,
    height: 13,
  },
  experienceText: {
    flex: 1,
  },
  experienceYears: {
    color: "#FFF",
    fontSize: 12,
  },
  experienceDesc: {
    color: "#FFF",
    fontSize: 12,
  },
  focusBox: {
    backgroundColor: "#225FFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#225FFF",
    paddingVertical: 10,
    marginTop: 3,
  },
  focusText: {
    color: "#FFF",
    fontSize: 12,
    marginHorizontal: 12,
    width: 86,
  },
  doctorInfo: {
    backgroundColor: "#FFF",
    borderRadius: 13,
    paddingVertical: 7,
    paddingHorizontal: 21,
    marginBottom: 12,
    marginHorizontal: 22,
  },
  doctorName: {
    color: "#225FFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  doctorSpec: {
    color: "#000",
    fontSize: 13,
    textAlign: "center",
    marginHorizontal: 33,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
    marginHorizontal: 22,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 13,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  statIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  statText: {
    color: "#225FFF",
    fontSize: 12,
    marginVertical: 1,
  },
  starIcon: {
    width: 21,
    height: 21,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  sectionTitle: {
    color: "#225FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2,
    marginLeft: 30,
  },
  sectionText: {
    color: "#000",
    fontSize: 12,
    marginBottom: 23,
    marginHorizontal: 30,
  },
});
