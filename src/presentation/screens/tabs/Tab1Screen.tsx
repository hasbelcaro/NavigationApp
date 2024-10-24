import React, { useEffect, useState } from 'react'
import { Button, Dimensions, Modal, StyleSheet, Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from '../../components/shared/Ionicons';
import SignatureCanvas from '../../components/shared/SignatureCanvas';
import Orientation from 'react-native-orientation-locker';

const Tab1Screen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  // Maneja el guardado de la firma
  const onOk = (signature: string) => {
    console.log(signature);
    // setModalVisible(false); // Cierra el modal después de guardar la firma
  };

  // Abre el modal y cambia la orientación a horizontal
  const openModal = () => {
    Orientation.lockToLandscape(); // Cambia a orientación horizontal
    setModalVisible(true);
  };

  // Cierra el modal y cambia la orientación a vertical
  const closeModal = () => {
    Orientation.lockToPortrait(); // Cambia a orientación vertical
    setModalVisible(false);
  };

  // Efecto para restaurar la orientación al desmontar el componente
  useEffect(() => {
    return () => {
      Orientation.unlockAllOrientations(); // Desbloquea todas las orientaciones al desmontar
    };
  }, []);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {/* <Icon name="rocket-outline" size={100} color="#900" /> */}
      <Ionicons name="rocket-outline" />

      <View style={styles.buttonContainer}>
        <Button title="Abrir Firma" onPress={openModal} />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.signatureContainer}>
            <Text style={styles.modalTitle}>Signature</Text>
            <SignatureCanvas text='Firma' onOK={onOk} />

            <View style={styles.modalButtonContainer}>
              <Button title="Cerrar" onPress={closeModal} />
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default Tab1Screen

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  signatureContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
})