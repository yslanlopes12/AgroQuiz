import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IntroScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        🌱 Agricultura Sustentável
      </Text>

      <Text style={styles.text}>
        A agricultura sustentável busca produzir alimentos respeitando
        o meio ambiente, preservando o solo, a água e a biodiversidade.
      </Text>

      <Text style={styles.text}>
        Neste jogo você aprenderá conceitos importantes sobre práticas
        agrícolas responsáveis e sustentabilidade.
      </Text>

      <Text style={styles.text}>
        Responda às perguntas corretamente para avançar no jogo e
        descobrir o quanto você sabe sobre o tema.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/QuizScreen")}
      >
        <Text style={styles.buttonText}>Começar o Quiz</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F1F8E9",
    padding: 30,
    justifyContent: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center"
  },

  text: {
    fontSize: 16,
    color: "#444",
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 22
  },

  button: {
    backgroundColor: "#2E7D32",
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }

});