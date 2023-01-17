import React, { FC } from 'react';
import { _View, _Text, _Icon, _Image } from 'components';
import { Dimensions, StyleSheet } from 'react-native';
import { Color } from 'const';
import { shadow } from 'global-styles';
import { LineChart } from 'react-native-chart-kit';
interface Props {
  name: string;
}
export const LineChartCard: FC<Props> = ({ name }) => {
  return (
    <_View
      margins={{ marginTop: 10 }}
      style={{
        backgroundColor: Color.White,
        width: '92%',
        borderRadius: 15,
        alignSelf: 'center',
        // ...shadow,
      }}
    >
      <_Text
        color={Color.Primary}
        font='Raleway-SemiBold'
        size='tny'
        paddings={{ padding: 10, paddingLeft: 20 }}
      >
        {name}
      </_Text>
      <LineChart
        style={styles.chart}
        data={{
          labels: [''],
          datasets: [
            {
              data: [0, 40, 85, 35, 0, 50, 70],
            },
          ],
        }}
        width={Dimensions.get('window').width / 1.12}
        height={160}
        chartConfig={{
          backgroundColor: Color.Primary,
          backgroundGradientFrom: Color.White,
          backgroundGradientTo: Color.White,
          propsForBackgroundLines: {
            stroke: Color.Primary,
            strokeWidth: '0',
          },
          propsForDots: {
            r: 2,
            strokeWidth: '3',
            stroke: Color.Primary,
          },
          propsForLabels: {
            ...styles.label,
          },
          decimalPlaces: 0,
          color: (opacity = 1) => Color.Secondary,
          strokeWidth: 2,
        }}
        verticalLabelRotation={0}
        withShadow={true}
        // withInnerLines={false}
        bezier={true}
        fromZero={true}
      />
    </_View>
  );
};
const styles = StyleSheet.create({
  label: {
    strokeWidth: 0.1,
    stroke: Color.Primary,
    fontSize: 8,
    fontFamily: 'Raleway-medium',
  },
  chart: {
    alignSelf: 'center',
    borderRadius: 16,
    paddingRight: 40,
    width: '100%',
  },
});
