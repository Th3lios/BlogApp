import {StyleSheet, Platform} from 'react-native';

// eslint-disable-next-line no-undef
export default styles = StyleSheet.create({
  rootView: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    overflow: 'hidden',
  },
  scroll: {
    height: '100%',
  },
  title: {
    fontSize: 16,
    color: '#b8bece',
    fontWeight: '500',
  },
  subtitle: {
    color: '#b8bece',
    fontWeight: '500',
    fontSize: 15,
    marginLeft: 20,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 20,
    color: '#3c4560',
    fontWeight: 'bold',
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 80,
  },
  avatar: {
    width: 45,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 22,
  },
  avatarContainer: {
    borderRadius: 22,
    position: 'absolute',
    width: 45,
    height: 45,
    top: 0,
    left: 0,
    marginLeft: 20,
    overflow: 'hidden',
  },
  avatarBorders: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  cardScroll: {
    marginHorizontal: 10,
    overflow: 'visible',
    height: 280 + 50,
  },
  relatedCardScroll: {
    marginHorizontal: 10,
    overflow: 'visible',
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 20,
  },
  logoScroll: {
    marginHorizontal: 12,
    overflow: 'visible',
    marginTop: 30,
    height: 90,
  },
});
