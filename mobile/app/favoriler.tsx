import React from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";

export default () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: 30,
        }}
      >
        {/* Başlık ve geri tuşu */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 27,
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/dneqblap_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              borderRadius: 30,
              width: 8,
              height: 13,
              position: "absolute",
              left: 29,
            }}
          />
          <Text
            style={{
              color: "#225FFF",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              marginTop:50,
            }}
          >
            Favoriler
          </Text>
        </View>

        {/* Kartlar */}
        {[...Array(4)].map((_, i) => {
          const images = [
            {
              name: "Dr. Olivia Turner, M.D.",
              specialty: "Dermato-Endocrinology",
              avatar:
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/tudi3xxs_expires_30_days.png",
            },
            {
              name: "Dr. Alexander Bennett, Ph.D.",
              specialty: "Dermato-Genetics",
              avatar:
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/jkj2ft0k_expires_30_days.png",
            },
            {
              name: "Dr. Sophia Martinez, Ph.D.",
              specialty: "Cosmetic Bioengineering",
              avatar:
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png",
            },
            {
              name: "Dr. Michael Davidson, M.D.",
              specialty: "Solar Dermatology",
              avatar:
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/yc3b3zep_expires_30_days.png",
            },
          ];

          const doctor = images[i];

          return (
            <View
              key={i}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#C9D5FF",
                borderRadius: 18,
                paddingVertical: 9,
                paddingHorizontal: 7,
                marginBottom: 17,
                marginHorizontal: 30,
              }}
            >
              <Image
                source={{ uri: doctor.avatar }}
                resizeMode={"stretch"}
                style={{
                  borderRadius: 30,
                  width: 68,
                  height: 68,
                  marginRight: 5,
                }}
              />
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 3,
                    marginLeft: 5,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#225FFF",
                      borderRadius: 13,
                      paddingVertical: 3,
                      paddingHorizontal: 4,
                      marginRight: 3,
                    }}
                  >
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5mr9t8ti_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{ width: 8, height: 10 }}
                    />
                  </View>
                  <Text style={{ color: "#225FFF", fontSize: 12 }}>
                    Professional Doctor
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 13,
                    paddingVertical: 9,
                    paddingHorizontal: 14,
                    marginBottom: 5,
                  }}
                >
                  <View style={{ flex: 1, marginRight: 12 }}>
                    <Text
                      style={{
                        color: "#225FFF",
                        fontSize: 14,
                        fontWeight: "bold",
                        marginBottom: 5,
                      }}
                    >
                      {doctor.name}
                    </Text>
                    <Text style={{ color: "#000000", fontSize: 12 }}>
                      {doctor.specialty}
                    </Text>
                  </View>
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/loqiujl0_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      borderRadius: 30,
                      width: 18,
                      height: 16,
                    }}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: "#225FFF",
                    borderRadius: 13,
                    paddingVertical: 6,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#FFFFFF", fontSize: 12 }}>
                    Make Appointment
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};