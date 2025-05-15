import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
interface MekanIsmiProps {
	// Define the expected properties here, for example:
	// title: string;
}

export default (props: MekanIsmiProps) => {
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
						backgroundColor: "#E2EAFFA8",
						paddingVertical: 9,
						paddingHorizontal: 27,
						marginBottom: 31,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 13,
							fontWeight: "bold",
							flex: 1,
						}}>
						{"16:04"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/zeyntd74_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 13,
							height: 11,
							marginRight: 5,
						}}
					/>
					<View 
						style={{
							width: 15,
							height: 8,
							borderColor: "#000000",
							borderRadius: 58,
							borderWidth: 2,
							marginRight: 6,
						}}>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/nvtow8fh_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 17,
							height: 9,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 18,
						marginHorizontal: 29,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/yg1abrfa_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 8,
							height: 13,
							marginRight: 84,
						}}
					/>
					<Text 
						style={{
							color: "#225FFF",
							fontSize: 24,
							fontWeight: "bold",
							textAlign: "center",
							flex: 1,
						}}>
						{"Mekan İsmi"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/cbc37cbj_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 47,
							height: 21,
						}}
					/>
				</View>
				<View 
					style={{
						backgroundColor: "#C9D5FF",
						borderRadius: 17,
						paddingVertical: 18,
						marginBottom: 34,
						marginHorizontal: 30,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 12,
							marginHorizontal: 22,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/6wny2rz8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 139,
								height: 140,
								marginRight: 10,
							}}
						/>
						<View 
							style={{
								flex: 1,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#225FFF",
									borderColor: "#225FFF",
									borderRadius: 18,
									borderWidth: 1,
									paddingVertical: 3,
									paddingHorizontal: 4,
									marginBottom: 3,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#C9D5FF",
										borderRadius: 13,
										paddingVertical: 4,
										paddingHorizontal: 5,
										marginRight: 6,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/g0fljq1f_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 9,
											height: 13,
										}}
									/>
								</TouchableOpacity>
								<View 
									style={{
										flex: 1,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 12,
										}}>
										{"15 years"}
									</Text>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 12,
										}}>
										{"experience"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#225FFF",
									borderColor: "#225FFF",
									borderRadius: 18,
									borderWidth: 1,
									paddingVertical: 10,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 12,
										marginHorizontal: 12,
										width: 86,
									}}>
									{"Focus: The impact of hormonal imbalances on skin conditions, specializing in acne, hirsutism, and other skin disorders."}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderRadius: 13,
							paddingVertical: 7,
							paddingHorizontal: 21,
							marginBottom: 12,
							marginHorizontal: 22,
						}}>
						<Text 
							style={{
								color: "#225FFF",
								fontSize: 15,
								fontWeight: "bold",
								textAlign: "center",
							}}>
							{"Dr. Alexander Bennett, Ph.D."}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 13,
								textAlign: "center",
								marginHorizontal: 33,
							}}>
							{"Dermato-Genetics"}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							marginBottom: 6,
							marginHorizontal: 22,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 13,
								paddingVertical: 4,
								paddingHorizontal: 5,
								marginRight: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/ijaav3es_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 10,
									height: 10,
									marginRight: 5,
								}}
							/>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
									marginVertical: 1,
								}}>
								{"5 "}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 13,
								paddingVertical: 4,
								paddingHorizontal: 5,
								marginRight: 5,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/oy3eer13_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 9,
									height: 9,
									marginRight: 5,
								}}
							/>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
									marginVertical: 1,
								}}>
								{"40"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 13,
								paddingVertical: 4,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/wzhpyz8v_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 10,
									height: 10,
									marginLeft: 6,
									marginRight: 4,
								}}
							/>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
									marginVertical: 1,
									flex: 1,
								}}>
								{"Mon-Sat / 9:00AM - 5:00PM"}
							</Text>
						</View>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/oco0fbvb_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 21,
							height: 21,
							marginLeft: 258,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 14,
						fontWeight: "bold",
						marginBottom: 2,
						marginLeft: 30,
					}}>
					{"Profile"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 23,
						marginHorizontal: 30,
					}}>
					{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				</Text>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 14,
						fontWeight: "bold",
						marginBottom: 2,
						marginLeft: 30,
					}}>
					{"career path"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 20,
						marginHorizontal: 30,
					}}>
					{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				</Text>
				<Text 
					style={{
						color: "#225FFF",
						fontSize: 14,
						fontWeight: "bold",
						marginBottom: 2,
						marginLeft: 30,
					}}>
					{"highlights"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 12,
						marginBottom: 64,
						marginHorizontal: 30,
					}}>
					{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
				</Text>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						paddingVertical: 10,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#4D55CC",
							borderRadius: 24,
							paddingVertical: 11,
							paddingHorizontal: 62,
							marginHorizontal: 30,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/4d5c2diq_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 22,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/b1ybxp98_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 30,
								width: 27,
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/iil6yyn5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 19,
								height: 21,
							}}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}