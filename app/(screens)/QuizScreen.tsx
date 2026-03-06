import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const questions = [
  {
    question: "O que é agricultura sustentável?",
    options: [
      "Produção agrícola que respeita o meio ambiente",
      "Uso excessivo de agrotóxicos",
      "Produção sem planejamento",
      "Desmatamento para plantio"
    ],
    answer: 0
  },
  {
    question: "Qual prática ajuda a preservar o solo?",
    options: [
      "Rotação de culturas",
      "Queimada constante",
      "Uso exagerado de fertilizantes",
      "Desmatamento"
    ],
    answer: 0
  },
  {
    question: "Qual recurso natural deve ser preservado na agricultura?",
    options: [
      "Água",
      "Plástico",
      "Concreto",
      "Metal"
    ],
    answer: 0
  }
];

export default function QuizScreen() {

  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [animation] = useState(new Animated.Value(0));

  const handleAnswer = (index:number) => {

    const correct = questions[currentQuestion].answer === index;

    if(correct){
      setScore(score + 1);
      setFeedback("✅ Correto!");
    }else{
      setFeedback("❌ Errado!");
    }

    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      })
    ]).start(() => {

      if(currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
        setFeedback("");
      }else{
        router.push({
          pathname: "/ResultScreen",
          params: { score: score + (correct ? 1 : 0), total: questions.length }
        });
      }

    });
  };

  const question = questions[currentQuestion];

  return (

    <View style={styles.container}>

      <Text style={styles.counter}>
        Pergunta {currentQuestion + 1} / {questions.length}
      </Text>

      <Text style={styles.question}>
        {question.question}
      </Text>

      {question.options.map((option, index) => (

        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleAnswer(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>

      ))}

      {feedback !== "" && (

        <Animated.View
          style={{
            opacity: animation,
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0,1],
                  outputRange: [0.8,1.2]
                })
              }
            ]
          }}
        >
          <Text style={styles.feedback}>{feedback}</Text>
        </Animated.View>

      )}

    </View>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"#f2f7f2"
  },

  counter:{
    fontSize:16,
    marginBottom:10,
    color:"#666"
  },

  question:{
    fontSize:22,
    fontWeight:"bold",
    marginBottom:20
  },

  option:{
    backgroundColor:"#4CAF50",
    padding:15,
    borderRadius:10,
    marginBottom:10
  },

  optionText:{
    color:"#fff",
    fontSize:16
  },

  feedback:{
    marginTop:20,
    fontSize:24,
    textAlign:"center",
    fontWeight:"bold"
  }

});