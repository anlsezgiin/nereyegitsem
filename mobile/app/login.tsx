import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

// Update edilmesi gereken UI bileşenleri var
const login = () => {
  const [secureText, setSecureText] = useState(true);
  const [textInput1, setTextInput1] = useState('');

  const onChangeTextInput1 = (text: string) => {
	setTextInput1(text);
  };

  return (
    <ScrollView  
	style={{
		backgroundColor: "#FFFFFF",
		borderRadius: 30,
	}}>
	<View 
		style={{
			flexDirection: "row",
			alignItems: "center",
			marginTop: 63,
			marginBottom: 34,
			marginLeft: 29,
		}}>
		<Image
			source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/lscbpn2y_expires_30_days.png"}} 
			resizeMode = {"stretch"}
			style={{
				borderRadius: 30,
				width: 8,
				height: 13,
				marginRight: 81,
			}}
		/>
		<View 
			style={{
				width: 16,
			}}>
		</View>
		<Text 
			style={{
				color: "#4D55CC",
				fontSize: 24,
				fontWeight: "bold",
			}}>
			{"Giriş Yap"}
		</Text>
	</View>
	<Text 
		style={{
			color: "#4D55CC",
			fontSize: 24,
			fontWeight: "bold",
			marginBottom: 12,
			marginLeft: 30,
		}}>
		{"Hoşgeldiniz"}
	</Text>
	<Text 
		style={{
			color: "#070707",
			fontSize: 12,
			marginBottom: 47,
			marginHorizontal: 30,
		}}>
		{"Lütfen şifrenizi kimseyle paylaşmayınız agziniza sicarim hani bi noktada diye biliyosun sus"}
	</Text>
	<Text 
		style={{
			color: "#000000",
			fontSize: 20,
			fontWeight: "bold",
			marginBottom: 12,
			marginLeft: 30,
		}}>
		{"Email veya Telefon Numarası"}
	</Text>
	<TextInput
		placeholder={"example@example.com"}
		value={textInput1}
		onChangeText={onChangeTextInput1}
		style={{
			color: "#7F9BFF",
			fontSize: 20,
			marginBottom: 20,
			marginHorizontal: 30,
			backgroundColor: "#ECF1FF",
			borderRadius: 13,
			paddingVertical: 15,
			paddingLeft: 13,
			paddingRight: 26,
		}}
	/>
	<Text 
		style={{
			color: "#000000",
			fontSize: 20,
			fontWeight: "bold",
			marginBottom: 12,
			marginLeft: 30,
		}}>
		{"Şifre"}
	</Text>
	<TouchableOpacity 
		style={{
			flexDirection: "row",
			alignItems: "center",
			backgroundColor: "#ECF1FF",
			borderRadius: 13,
			paddingVertical: 14,
			paddingHorizontal: 12,
			marginBottom: 9,
			marginHorizontal: 30,
		}} onPress={()=>alert('Pressed!')}>
		<Text 
			style={{
				color: "#7F9BFF",
				fontSize: 20,
				flex: 1,
			}}>
			{"*****"}
		</Text>
		<Image
			source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/5sm3hzpt_expires_30_days.png"}} 
			resizeMode = {"stretch"}
			style={{
				borderRadius: 30,
				width: 20,
				height: 16,
			}}
		/>
	</TouchableOpacity>
	<Text 
		style={{
			color: "#4D55CC",
			fontSize: 12,
			fontWeight: "bold",
			marginBottom: 36,
			marginLeft: 137,
		}}>
		{"Şifremi Unuttum"}
	</Text>
	<View 
		style={{
			alignItems: "center",
			marginBottom: 204,
			marginHorizontal: 46,
		}}>
		<View 
			style={{
				backgroundColor: "#4D55CC",
				borderRadius: 30,
				paddingVertical: 16,
				marginBottom: 16,
				marginHorizontal: 36,
			}}>
			<Text 
				style={{
					color: "#FFFFFF",
					fontSize: 24,
					fontWeight: "bold",
					textAlign: "center",
					marginHorizontal: 23,
				}}>
				{"Giriş Yap"}
			</Text>
		</View>
		<Text 
			style={{
				color: "#070707",
				fontSize: 12,
				textAlign: "center",
				marginBottom: 16,
				marginHorizontal: 3,
			}}>
			{"veya şununla devam et"}
		</Text>
		<Image
			source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/tpcoy5b9YQ/mmt9q95w_expires_30_days.png"}} 
			resizeMode = {"stretch"}
			style={{
				width: 40,
				height: 40,
				marginBottom: 16,
			}}
		/>
		<Text 
			style={{
				color: "#070707",
				fontSize: 12,
				textAlign: "center",
			}}>
			{"Hesabın mı yok? Kayıt Ol"}
		</Text>
	</View>
</ScrollView>
  );
};

export default login