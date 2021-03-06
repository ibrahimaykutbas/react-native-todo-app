import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 20,
    padding: 10,
  },
  text: {
    fontWeight: '300',
    fontSize: 30,
    textAlign: 'right',
    color: 'black',
    margin: 20,
  },
  modalView: {
    backgroundColor: '#cfd8dc',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flex: 1,
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    height: 50,
  },
  buttonOpen: {
    borderRadius: 50,
    padding: 15,
    elevation: 2,
    width: 50,
    backgroundColor: '#982222',
  },
  buttonClose: {
    padding: 15,
    elevation: 2,
    width: '80%',
    backgroundColor: '#263238',
    marginTop: 20,
    borderRadius: 5,
  },
  textInput: {
    backgroundColor: '#ECEFF1',
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    elevation: 10,
    color: '#000000',
    borderRadius: 5,
  },
});
