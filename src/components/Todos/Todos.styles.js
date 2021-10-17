import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f5f8',
  },
  todos: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    elevation: 5,
  },
  todoText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#323232',
  },
  completed: {
    textDecorationLine: 'line-through',
    textShadowRadius: 5,
  },
  emptyContainer: {
    margin: 50,
    marginTop: '50%',
  },
  emptyText: {
    color: '#455a64',
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
});
