import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from './Button';
import Colors from '../constants/Colors';

const Instructions = ({ heading, images, singleImage, placeholderBadge, iconList, instructionText, paragraphs, buttonText, linkText }) => {
    let imagesThree, icons;

    if (images) {
        imagesThree = images.map((image, index) => {
            return <Image key={index} style={styles.staticPhotoThree} source={image}/>;
        });    
    } 
    if (iconList) {
        icons = iconList.map((icon, index) => {
            return <Button key={index} style={styles.activity} icon={icon} />
        });
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headingText}>{heading}</Text>
                <View style={styles.photoStrip}>
                    {imagesThree}
                </View>
                <Image source={singleImage} style={styles.singleImage}></Image>
                <View style={styles.photoStrip}>
                    {icons}
                </View>
                <Image source={placeholderBadge} style={styles.placeholderBadge}></Image>
                <Text style={styles.instructionText}>
                    {instructionText}
                </Text>
                <Text style={styles.paragraphs}>{paragraphs}</Text>
            </View>

            <Button style={styles.buttonStyle} title={buttonText}/>
            <Text style={styles.textLink}>{linkText}</Text>
        </View>
    )};

export default Instructions;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 30,
      padding: 20,
      paddingBottom: 50,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5,
    },
    headingText: {
        alignSelf: 'center',
        fontFamily: 'Lato-Bold',
        fontWeight: 'bold',
        color: Colors.selectionColor,
        fontSize: 22,
    },
    instructionText: {
        textAlign: 'center',
        color: Colors.textGray,
        fontFamily: 'Lato',
        margin: 10,
        fontSize: 18,
        lineHeight: 25
    },

    staticPhotoThree: {
        borderColor: Colors.selectionColor,
        borderWidth: 2,
        height: 90,
        width: 90,
        marginLeft: 5,
        marginRight: 5,
    },
  
    activity: {
        borderColor: Colors.selectionColor,
        borderWidth: 2,
        height: 50,
        width: 50,
        marginLeft: 5,
        marginRight: 5,
    },
    photoStrip: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-around'
    },
    buttonStyle: {
        backgroundColor: '#fff',
        color: Colors.textGray,
        width: 150,
        height: 45,
        marginTop: 90,
        paddingTop: 11,
        alignSelf: 'center',
        fontFamily: 'Lato',
        fontSize: 18,
        borderRadius: 5,
        borderColor: '#fff', 
        overflow: 'hidden',
    },
    textLink: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        textDecorationLine: 'underline',   
        marginTop: 10,
    },
    placeholderBadge: {
        alignSelf: 'center',
    }, 
    paragraphs: {
        color: Colors.textGray,
        fontFamily: 'Lato',
        margin: 18,
        marginTop: -50,
        marginBottom: 0,
        fontSize: 18,
        lineHeight: 25,
    },
    singleImage: {
        alignSelf: 'center',
        marginBottom: 0,
    }
  
});