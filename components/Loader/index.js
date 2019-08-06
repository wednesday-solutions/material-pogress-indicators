import React, { Component } from 'react';
import { StyleSheet, View, Animated, Easing } from 'react-native';
import Style from '../../style';
import PropTypes from 'prop-types';
 
class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xPosition: new Animated.Value(0),
            completedRun: false,
        };
        this.startLoadingAnimation();
    }

    componentDidUpdate(previousProps) {
        const { isVisible } = this.props;
        if (previousProps.isVisible !== isVisible && isVisible) {
            this.startLoadingAnimation();
       } 
    }

    startLoadingAnimation = () => {
        const {
            duration
        } = this.props;
        this.state.xPosition.setValue(0);
        this.setState({
            completedRun: false
        });
        Animated.timing(this.state.xPosition, {
            toValue: 1,
            easing: Easing.linear,
            duration: duration,
        }).start((o) => {
            if (o.finished && this.props.isVisible) {
                this.setState({
                    completedRun: true
                });
                this.startLoadingAnimation();
            }
        });
    };

    render() {
        const {
            accentColor,
            isVisible,
            style,
            trackColor,
            indicatorColor,
        } = this.props;
        
        const {
            completedRun
        } = this.state;
        const loadingIndicatorInterpolatedMarginLeft = this.state.xPosition.interpolate({
            inputRange: [0, 1],
            outputRange: ['-150%', '100%']
        });
        const loadingIndicatorScaleXInterpolatedValue = this.state.xPosition.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.2, 0.5, 0.4]
        });

        if (isVisible || !completedRun) {
            return (
                <View style={[styles.container, style]}>
                    <Animated.View style={{
                        marginLeft: loadingIndicatorInterpolatedMarginLeft,
                        backgroundColor: (accentColor || indicatorColor),
                        transform: [
                            {
                                scaleX: loadingIndicatorScaleXInterpolatedValue
                            }
                        ],
                        ...styles.loadingIndicator
                    }} />
                </View>
            );
        }
        return (null);
    }
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: 4,
        backgroundColor: Style.TRACK
    },
    loadingIndicator: {
        flexGrow: 1
    }
});

Loader.propTypes = {
    duration: PropTypes.number,
    isVisible: PropTypes.bool,
    style: PropTypes.object,
    accentColor: PropTypes.string
};

export default Loader;
