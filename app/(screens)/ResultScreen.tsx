import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ResultScreen() {

  const router = useRouter();
  const { score, total } = useLocalSearchParams();

  const finalScore = Number(score);
  const totalQuestions = Number(total);

  const [animation] = useState(new Animated.Value(0));

  const passed = finalScore >= totalQuestions / 2;

  useEffect(() => {

    Animated.spring(animation,{
      toValue:1,
      friction:4,
      useNativeDriver:true
    }).start();

  },[]);

  const restartQuiz = () => {
    router.replace("/(screens)/HomeScreen");
  };

  return (

    <View style={styles.container}>

      <Animated.View
        style={{
          transform:[{scale:animation}]
        }}
      >

        <Text style={styles.title}>
          {passed ? "🌱 Parabéns!" : "📚 Continue aprendendo!"}
        </Text>

      </Animated.View>

      <Text style={styles.score}>
        Você acertou {finalScore} de {totalQuestions} perguntas
      </Text>

      <Text style={styles.message}>
        {passed
          ? "Você demonstrou bom conhecimento sobre agricultura sustentável!"
          : "Não desista! Aprender sobre sustentabilidade é essencial para o futuro."
        }
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={restartQuiz}
      >
        <Text style={styles.buttonText}>
          Reiniciar Quiz
        </Text>
      </TouchableOpacity>

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    padding:30,
    backgroundColor:"#f2f7f2"
  },

  title:{
    fontSize:32,
    fontWeight:"bold",
    marginBottom:20,
    textAlign:"center"
  },

  score:{
    fontSize:20,
    marginBottom:15
  },

  message:{
    fontSize:16,
    textAlign:"center",
    marginBottom:30,
    color:"#555"
  },

  button:{
    backgroundColor:"#4CAF50",
    paddingVertical:15,
    paddingHorizontal:40,
    borderRadius:10
  },

  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  }

});