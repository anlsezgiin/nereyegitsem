import React from "react";
import { 
  SafeAreaView, 
  View, 
  ScrollView, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
// Main component
interface HomeProps {
  // Define the expected props here, for example:
  // title?: string;
}

const home: React.FC<HomeProps> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {renderHeader()}
        {renderWelcomeSection()}
        {renderDestinationPrompt()}
        {renderRecommendedPlaces()}
        {renderFooter()}
      </ScrollView>
    </SafeAreaView>
  );
};
// Render header with time and icons
const renderHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.timeText}>{"16:04"}</Text>
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/hukfluk3_expires_30_days.png" }} style={styles.iconSmall} />
    <View style={styles.dot} />
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/4dtkh4a7_expires_30_days.png" }} style={styles.iconSmall} />
  </View>
);
// Render welcome section
const renderWelcomeSection = () => (
  <View style={styles.welcomeContainer}>
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/1b55vlbd_expires_30_days.png" }} style={styles.profileImage} />
    <View style={styles.welcomeTextContainer}>
      <Text style={styles.welcomeText}>{"Hoşgeldiniz!"}</Text>
      <Text style={styles.userName}>{"John Doe"}</Text>
    </View>
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/9wt42eo4_expires_30_days.png" }} style={styles.iconMedium} />
  </View>
);
// Render destination prompt
const renderDestinationPrompt = () => (
  <View style={styles.destinationPromptContainer}>
    <Text style={styles.destinationPromptText}>{"Nereye Gitmek istersin?"}</Text>
  </View>
);
// Render recommended places
const renderRecommendedPlaces = () => (
  <View>
    <Text style={styles.recommendedPlacesTitle}>{"Önerilen Mekanlar"}</Text>
    {Array.from({ length: 3 }).map((_, index) => (
      <RecommendedPlace key={index} />
    ))}
  </View>
);
// Render individual recommended place
const RecommendedPlace = () => (
  <View style={styles.recommendedPlaceContainer}>
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/xycev6py_expires_30_days.png" }} style={styles.recommendedPlaceImage} />
    <TouchableOpacity style={styles.recommendedPlaceButton} onPress={() => alert('Pressed!')}>
      <Text style={styles.recommendedPlaceButtonText}>{"Lorem"}</Text>
      <Text style={styles.recommendedPlaceButtonSubText}>{"Lorem"}</Text>
    </TouchableOpacity>
    <View style={styles.ratingContainer}>
      <RatingItem count={5} />
      <RatingItem count={60} />
    </View>
  </View>
);
// Render rating item
const RatingItem: React.FC<{ count: number }> = ({ count }) => (
  <View style={styles.ratingItemContainer}>
    <Text style={styles.ratingText}>{count}</Text>
  </View>
);
// Render footer with icons
const renderFooter = () => (
  <View style={styles.footerContainer}>
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/w3kwu0n9_expires_30_days.png" }} style={styles.footerIcon} />
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/mup6k3vq_expires_30_days.png" }} style={styles.footerIcon} />
    <Image source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/uqsfadwx_expires_30_days.png" }} style={styles.footerIcon} />
  </View>
);
// Styles for the component
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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EAFFA8",
    paddingVertical: 9,
    paddingHorizontal: 27,
    marginBottom: 13,
  },
  timeText: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
  },
  iconSmall: {
    borderRadius: 30,
    width: 13,
    height: 11,
    marginRight: 5,
  },
  dot: {
    width: 15,
    height: 8,
    borderColor: "#000000",
    borderRadius: 58,
    borderWidth: 2,
    marginRight: 6,
  },
  iconMedium: {
    borderRadius: 30,
    width: 27,
    height: 27,
  },
  welcomeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
    marginHorizontal: 32,
  },
  profileImage: {
    borderRadius: 30,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  welcomeTextContainer: {
    alignItems: "center",
  },
  welcomeText: {
    color: "#225FFF",
    fontSize: 12,
    marginBottom: 1,
  },
  userName: {
    color: "#000000",
    fontSize: 14,
  },
  destinationPromptContainer: {
    alignItems: "center",
  },
  destinationPromptText: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  recommendedPlacesTitle: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 7,
    marginLeft: 93,
  },
  recommendedPlaceContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C9D5FF",
    borderRadius: 17,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
    marginHorizontal: 28,
  },
  recommendedPlaceImage: {
    borderRadius: 30,
    width: 57,
    height: 57,
    marginRight: 10,
  },
  recommendedPlaceButton: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 9,
    paddingLeft: 14,
    marginBottom: 3,
  },
  recommendedPlaceButtonText: {
    color: "#4D55CC",
    fontSize: 14,
    fontWeight: "bold",
  },
  recommendedPlaceButtonSubText: {
    color: "#000000",
    fontSize: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    paddingVertical: 5,
    paddingHorizontal: 6,
    marginRight: 6,
  },
  ratingText: {
    color: "#225FFF",
    fontSize: 12,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4D55CC",
    borderRadius: 24,
    paddingVertical: 11,
    paddingHorizontal: 62,
    marginBottom: 19,
    marginHorizontal: 30,
  },
  footerIcon: {
    width: 23,
    height: 23,
  },
});
export default home;