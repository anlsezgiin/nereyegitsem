import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
// Main component
interface ResultsScreenProps {
  // Define the expected props here, for example:
  // navigation: any; // Replace 'any' with the correct type if known
}

const mekanSonuc: React.FC<ResultsScreenProps> = (props) => {
  const [textInput1, setTextInput1] = useState('');
  // Function to handle text input change
  const handleTextInputChange = (text: string) => {
    setTextInput1(text);
  };
  // Define the type for a doctor object
  interface Doctor {
    name: string;
    specialty: string;
    image: string;
    infoIcon: string;
  }
  // Function to render a doctor card
  const renderDoctorCard = (doctor: Doctor) => (
    <View style={styles.doctorCard}>
      <Image source={{ uri: doctor.image }} resizeMode="stretch" style={styles.doctorImage} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoButtonText}>{"Info"}</Text>
          </TouchableOpacity>
          <Image source={{ uri: doctor.infoIcon }} resizeMode="stretch" style={styles.infoIcon} />
        </View>
      </View>
    </View>
  );
  // Sample doctor data
  const doctors = [
    {
      name: "Dr. Alexander Bennett, Ph.D.",
      specialty: "Dermato-Genetics",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/o7s0h0m1_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/jedqzofe_expires_30_days.png",
    },
    {
      name: "Dr. Michael Davidson, M.D.",
      specialty: "Solar Dermatology",
      image: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/b21nbj9f_expires_30_days.png",
      infoIcon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/3xk9d20f_expires_30_days.png",
    },
    // Add more doctors as needed
  ];
  return (
    <SafeAreaView 
	style={{
		flex: 1,
		backgroundColor: "#FFFFFF",
	}}>
	<ScrollView  
		style={{
			flex: 1,
			backgroundColor: "#FFFFFF",
			borderRadius: 30,
		}}>
		<View 
			style={{
				flexDirection: "row",
				alignItems: "center",
				marginTop: 59,
				marginBottom: 20,
				marginLeft: 29,
			}}>
			<Image
				source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/j6jvntsm_expires_30_days.png"}} 
				resizeMode = {"stretch"}
				style={{
					borderRadius: 30,
					width: 8,
					height: 13,
					marginRight: 84,
				}}
			/>
			<View 
				style={{
					width: 16,
				}}>
			</View>
			<Text 
				style={{
					color: "#225FFF",
					fontSize: 24,
					fontWeight: "bold",
					marginRight: 55,
				}}>
				{"Sonuçlar"}
			</Text>
			<View 
				style={{
					width: 16,
				}}>
			</View>
			<View 
				style={{
					width: 16,
				}}>
			</View>
			<View 
				style={{
					width: 16,
				}}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/grojs357_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						borderRadius: 30,
						width: 21,
						height: 21,
					}}
				/>
			</View>
		</View>
		<View 
			style={{
				flexDirection: "row",
				alignItems: "flex-start",
				backgroundColor: "#C9D5FF",
				borderRadius: 17,
				paddingVertical: 12,
				paddingHorizontal: 11,
				marginBottom: 15,
				marginHorizontal: 32,
			}}>
			<Image
				source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/ofmqxrn1_expires_30_days.png"}} 
				resizeMode = {"stretch"}
				style={{
					width: 107,
					height: 107,
					marginRight: 8,
				}}
			/>
			<View 
				style={{
					flex: 1,
					marginTop: 19,
				}}>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 15,
						fontWeight: "bold",
						marginBottom: 21,
						marginHorizontal: 1,
					}}>
					{"Dr. Alexander Bennett Ph.D."}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 14,
						marginLeft: 1,
					}}>
					{"Dermato-Genetics"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View 
						style={{
							backgroundColor: "#225FFF",
							borderRadius: 18,
							paddingVertical: 6,
							paddingLeft: 7,
							paddingRight: 18,
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 15,
								textAlign: "right",
								width: 43,
							}}>
							{"Info"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/nflbefci_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 21,
							height: 21,
						}}
					/>
				</View>
			</View>
		</View>
		<View 
			style={{
				flexDirection: "row",
				alignItems: "flex-start",
				backgroundColor: "#C9D5FF",
				borderRadius: 17,
				paddingVertical: 12,
				paddingHorizontal: 11,
				marginBottom: 14,
				marginHorizontal: 32,
			}}>
			<Image
				source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/off3radr_expires_30_days.png"}} 
				resizeMode = {"stretch"}
				style={{
					width: 107,
					height: 107,
					marginRight: 8,
				}}
			/>
			<View 
				style={{
					flex: 1,
					marginTop: 19,
				}}>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 14,
						fontWeight: "bold",
						marginBottom: 15,
						marginLeft: 1,
					}}>
					{"Dr. Michael Davidson\nM.D."}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 18,
						marginLeft: 1,
					}}>
					{"Solar Dermatology"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View 
						style={{
							backgroundColor: "#225FFF",
							borderRadius: 18,
							paddingVertical: 6,
							paddingLeft: 7,
							paddingRight: 18,
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 15,
								textAlign: "right",
								width: 43,
							}}>
							{"Info"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/i6nat7es_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 21,
							height: 21,
						}}
					/>
				</View>
			</View>
		</View>
		<View 
			style={{
				flexDirection: "row",
				alignItems: "flex-start",
				backgroundColor: "#C9D5FF",
				borderRadius: 17,
				paddingVertical: 14,
				paddingHorizontal: 11,
				marginBottom: 201,
				marginHorizontal: 32,
			}}>
			<Image
				source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/vh2j9l07_expires_30_days.png"}} 
				resizeMode = {"stretch"}
				style={{
					width: 101,
					height: 102,
					marginRight: 14,
				}}
			/>
			<View 
				style={{
					flex: 1,
					marginTop: 19,
					marginBottom: 7,
				}}>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 16,
						fontWeight: "bold",
						marginBottom: 6,
						marginHorizontal: 1,
					}}>
					{"Dr. Olivia Turner \nM.D."}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 24,
						marginLeft: 1,
					}}>
					{"Dermato-Endocrinology"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<View 
						style={{
							backgroundColor: "#225FFF",
							borderRadius: 18,
							paddingVertical: 6,
							paddingLeft: 7,
							paddingRight: 18,
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 15,
								textAlign: "right",
								width: 43,
							}}>
							{"Info"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/op4gpepr_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 21,
							height: 21,
						}}
					/>
				</View>
			</View>
		</View>
		<View 
			style={{
				height: 77,
				backgroundColor: "#FFFFFF",
			}}>
		</View>
	</ScrollView>
</SafeAreaView>
  );
};
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EAFFA8",
    paddingVertical: 9,
    paddingHorizontal: 27,
    marginBottom: 31,
  },
  headerTime: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "bold",
    flex: 1,
  },
  headerIcon: {
    borderRadius: 30,
    width: 13,
    height: 11,
    marginRight: 5,
  },
  statusIndicator: {
    width: 15,
    height: 8,
    borderColor: "#000000",
    borderRadius: 58,
    borderWidth: 2,
    marginRight: 6,
  },
  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 29,
  },
  resultsIcon: {
    borderRadius: 30,
    width: 21,
    height: 21,
  },
  resultsTitle: {
    color: "#225FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 31,
  },
  doctorCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#C9D5FF",
    borderRadius: 17,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginBottom: 15,
    marginHorizontal: 32,
  },
  doctorImage: {
    width: 107,
    height: 107,
    marginRight: 8,
  },
  doctorInfo: {
    flex: 1,
    marginTop: 19,
  },
  doctorName: {
    color: "#225FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 21,
    marginHorizontal: 1,
  },
  doctorSpecialty: {
    color: "#000000",
    fontSize: 13,
    marginBottom: 14,
    marginLeft: 1,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoButton: {
    backgroundColor: "#225FFF",
    borderRadius: 18,
    paddingVertical: 6,
    paddingLeft: 7,
    paddingRight: 18,
  },
  infoButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  infoIcon: {
    width: 21,
    height: 21,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C9D5FF",
    borderRadius: 17,
    paddingVertical: 12,
    paddingHorizontal: 11,
    marginBottom: 12,
    marginHorizontal: 32,
  },
  inputImage: {
    width: 107,
    height: 107,
    marginRight: 9,
  },
  textInput: {
    color: "#225FFF",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    paddingVertical: 43,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    right: -32,
    left: -32,
    backgroundColor: "#FFFFFF",
  },
  footerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4D55CC",
    borderRadius: 24,
    paddingVertical: 11,
    paddingHorizontal: 62,
    marginTop: 10,
    marginBottom: 19,
    marginHorizontal: 30,
  },
  footerIcon: {
    width: 23,
    height: 22,
  },
});
export default mekanSonuc;