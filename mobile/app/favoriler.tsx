import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
interface FavorilerProps {
  // Define the expected props here, for example:
  // title: string;
}

export default (props: FavorilerProps) => {
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
						marginBottom: 35,
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/1ncermaf_expires_30_days.png"}} 
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/6t9n9wbx_expires_30_days.png"}} 
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
						marginBottom: 27,
						marginLeft: 29,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/dneqblap_expires_30_days.png"}} 
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
						}}>
						{"Favoriler"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#C9D5FF",
						borderRadius: 18,
						paddingVertical: 9,
						paddingHorizontal: 7,
						marginBottom: 17,
						marginHorizontal: 30,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/tudi3xxs_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 68,
							height: 68,
							marginRight: 5,
						}}
					/>
					<View 
						style={{
							flex: 1,
							alignItems: "flex-start",
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 3,
								marginLeft: 5,
							}}>
							<View 
								style={{
									backgroundColor: "#225FFF",
									borderRadius: 13,
									paddingVertical: 3,
									paddingHorizontal: 4,
									marginRight: 3,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5mr9t8ti_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 10,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
								}}>
								{"Professional Doctor"}
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
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 12,
								}}>
								<Text 
									style={{
										color: "#225FFF",
										fontSize: 14,
										fontWeight: "bold",
										marginBottom: 5,
									}}>
									{"Dr. Olivia Turner, M.D."}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"Dermato-Endocrinology"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/loqiujl0_expires_30_days.png"}} 
								resizeMode = {"stretch"}
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
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginLeft: 56,
								}}>
								{"Make Appointment"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#C9D5FF",
						borderRadius: 18,
						paddingVertical: 9,
						paddingHorizontal: 7,
						marginBottom: 18,
						marginHorizontal: 30,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/jkj2ft0k_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 68,
							height: 68,
							marginRight: 5,
						}}
					/>
					<View 
						style={{
							flex: 1,
							alignItems: "flex-start",
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 3,
								marginLeft: 5,
							}}>
							<View 
								style={{
									backgroundColor: "#225FFF",
									borderRadius: 13,
									paddingVertical: 3,
									paddingHorizontal: 4,
									marginRight: 3,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/v64mz8n6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 10,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
								}}>
								{"Professional Doctor"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 13,
								paddingVertical: 8,
								paddingHorizontal: 10,
								marginBottom: 5,
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#225FFF",
										fontSize: 14,
										fontWeight: "bold",
										marginBottom: 5,
									}}>
									{"Dr. Alexander Bennett, Ph.D."}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"Dermato-Genetics"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5zvqj72u_expires_30_days.png"}} 
								resizeMode = {"stretch"}
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
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginLeft: 56,
								}}>
								{"Make Appointment"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#C9D5FF",
						borderRadius: 18,
						paddingVertical: 8,
						paddingHorizontal: 7,
						marginBottom: 18,
						marginHorizontal: 30,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/bsitouy1_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 68,
							height: 68,
							marginRight: 5,
						}}
					/>
					<View 
						style={{
							flex: 1,
							alignItems: "flex-start",
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 3,
								marginLeft: 5,
							}}>
							<View 
								style={{
									backgroundColor: "#225FFF",
									borderRadius: 13,
									paddingVertical: 3,
									paddingHorizontal: 4,
									marginRight: 3,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/fa8a5lkf_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 10,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
								}}>
								{"Professional Doctor"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 13,
								paddingVertical: 11,
								paddingHorizontal: 10,
								marginBottom: 5,
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 12,
								}}>
								<Text 
									style={{
										color: "#225FFF",
										fontSize: 14,
										fontWeight: "bold",
										marginBottom: 2,
									}}>
									{"Dr. Sophia Martinez, Ph.D."}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"Cosmetic Bioengineering"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/ksxb9gj2_expires_30_days.png"}} 
								resizeMode = {"stretch"}
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
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginLeft: 56,
								}}>
								{"Make Appointment"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#C9D5FF",
						borderRadius: 18,
						padding: 7,
						marginBottom: 144,
						marginHorizontal: 30,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/yc3b3zep_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 30,
							width: 68,
							height: 68,
							marginRight: 5,
						}}
					/>
					<View 
						style={{
							flex: 1,
							alignItems: "flex-start",
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								marginBottom: 3,
								marginLeft: 5,
							}}>
							<View 
								style={{
									backgroundColor: "#225FFF",
									borderRadius: 13,
									paddingVertical: 3,
									paddingHorizontal: 4,
									marginRight: 3,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5ydy0peb_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 10,
									}}
								/>
							</View>
							<Text 
								style={{
									color: "#225FFF",
									fontSize: 12,
								}}>
								{"Professional Doctor"}
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
							}}>
							<View 
								style={{
									flex: 1,
									marginRight: 12,
								}}>
								<Text 
									style={{
										color: "#225FFF",
										fontSize: 14,
										fontWeight: "bold",
										marginBottom: 5,
									}}>
									{"Dr. Michael Davidson, M.D."}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
									}}>
									{"Solar Dermatology"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/q5junrup_expires_30_days.png"}} 
								resizeMode = {"stretch"}
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
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									marginLeft: 56,
								}}>
								{"Make Appointment"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignItems: "flex-start",
						backgroundColor: "#FFFFFF",
						paddingVertical: 10,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#4D55CC",
							borderRadius: 24,
							paddingVertical: 11,
							paddingHorizontal: 62,
							marginLeft: 23,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/2o8qqmfl_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 22,
								marginRight: 55,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/u5gyxoq6_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 30,
								width: 27,
								height: 24,
								marginRight: 48,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/eeimegxk_expires_30_days.png"}} 
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