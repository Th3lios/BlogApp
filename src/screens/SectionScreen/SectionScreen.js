import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform,
  Linking,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Markdown from 'react-native-showdown';
// icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
IconF.loadFont();

const SectionScreen = (props) => {
  useEffect(() => {
    Platform.OS === 'ios' && StatusBar.setBarStyle('light-content', true);
    return () => {
      Platform.OS === 'ios' && StatusBar.setBarStyle('dark-content', true);
    };
  });
  const webView = useRef(null);
  const {title, caption, subtitle, image, logo, content} = props.route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.rootView}>
        {Platform.OS === 'ios' && <StatusBar hidden />}
        <View style={styles.container}>
          <View style={styles.cover}>
            <Image style={styles.image} source={{uri: image.url}} />
            <View style={styles.wrapper}>
              <Image style={styles.logo} source={{uri: logo.url}} />
              <Text style={styles.caption}>{caption}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <TouchableOpacity
              style={styles.closed}
              onPress={() => props.navigation.goBack()}>
              <Icon name="close" size={24} color="#546bfb" />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {/* <WebView
            source={{html: content + htmlStyles}}
            scalesPageToFit={false}
            scrollEnable={false}
            ref={webView}
            onNavigationStateChange={(event) => {
              console.log(event);
              if (event.url !== 'about:blank') {
                webView.current.stopLoading();
                Linking.openURL(event.url);
              }
            }}
          /> */}
            <Markdown
              body={content}
              pureCSS={htmlStyles}
              scalesPageToFit={false}
              scrollEnabled={false}
              style={styles.markdown}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const htmlContent = `
<h1>Test</h1>
<a href="https://www.google.cl">link<a>
`;

const htmlStyles = `
  * {
    font-family: -apple-system, Roboto, Sans-serif;
    padding: 0;
    margin: 0;
    font-size: 17px;
    font-weight: normal;
    color: #3c4560;
    line-height: 24px;
  }

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    color: #b8bece;
    line-height: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 20px;
  }

  a {
    color: #4775f2;
    font-weight: 600;
    text-decoration: none;
  }

  strong {
    font-weight: 700;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: Platform.OS === 'ios' ? '#f0f3f5' : 'black',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f3f5',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  cover: {
    height: 375,
  },
  image: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    top: 78,
    left: 20,
    width: '50%',
  },
  subtitle: {
    fontSize: 15,
    opacity: 0.8,
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  closed: {
    height: 34,
    width: 34,
    borderRadius: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 20,
    alignItems: 'center',
  },
  logo: {
    height: 24,
    width: 24,
  },
  caption: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  content: {
    height: 1400,
    padding: 20,
  },
  markdown: {
    backgroundColor: '#f0f3f5',
  },
});

export default SectionScreen;
