import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import SignatureScreen, { SignatureViewRef } from "react-native-signature-canvas";

interface Props {
  text: string;
  onOK: (signature: string) => void;
}

const Sign: React.FC<Props> = ({ text, onOK }) => {
  const ref = useRef<SignatureViewRef>(null);

  // Maneja la firma finalizada
  const handleSignature = (signature: string) => {
    console.log(signature);
    onOK(signature);
  };

  // Maneja cuando la firma está vacía
  const handleEmpty = () => {
    console.log("Empty");
  };

  // Maneja la limpieza de la firma
  const handleClear = () => {
    console.log("clear success!");
  };

  // Maneja el fin de la interacción con el canvas
  const handleEnd = () => {
    ref.current?.readSignature();
  };

  // Estilo para el componente web de firma
  const webStyle = `
    .m-signature-pad {
      box-shadow: none; 
      border: none; 
      width: 100%; 
      height: 100%;
    }
    .m-signature-pad--body {
      border: 1px solid #000;
    }
    .m-signature-pad--footer {
      display: none; 
      margin: 0px;
    }
    body, html {
      width: 100%; 
      height: 100%; 
      margin: 0; 
      padding: 0;
    }
  `;

  return (
    <View style={styles.container}>
      <SignatureScreen
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        autoClear={false}
        descriptionText={text}
        webStyle={webStyle}
      />
    </View>
  );
};

// Estilos para el contenedor
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: '100%',
    height: 200,
  },
});

export default Sign;