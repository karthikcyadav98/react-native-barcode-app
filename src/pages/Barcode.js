import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Portal, Dialog, Paragraph, Button} from 'react-native-paper';
import {RNCamera} from 'react-native-camera';

class Barcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torchOn: false,
      cameraOn: true,
      dialog: false,
      barcodeData: '',
    };
  }

  barcodeRecognized = ({barcodes}) => {
    barcodes.forEach(barcode => {
      this.setState({barcodeData: barcode.data, cameraOn: false, dialog: true});
    });
  };
  render() {
    if (this.state.cameraOn) {
      return this.renderCamera();
    } else {
      return (
        <Portal>
          <Dialog visible={this.state.dialog} onDismiss={this.handleDismiss}>
            <Dialog.Title>Barcode Data</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{this.state.barcodeData}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  this.setState({cameraOn: true});
                }}>
                OK
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      );
    }
  }

  renderCamera = () => {
    console.log('kjadhjagd');
    return (
      <View style={styles.container}>
        <RNCamera
          // ref={(ref) => {
          // 	this.camera = ref;
          // }}
          style={{
            flex: 1,
            width: '100%',
          }}
          cameraProps={{captureVideo: false}}
          onGoogleVisionBarcodesDetected={this.barcodeRecognized}
        />
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40,
  },
  bottomOverlay: {
    position: 'absolute',
    width: '100%',
    flex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Barcode;
