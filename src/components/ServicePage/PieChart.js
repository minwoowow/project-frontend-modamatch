import { ResponsivePieCanvas } from "@nivo/pie";

const PieChart = ({ data }) => {

  return (
    <div className="w-[380px] h-[250px]">
      <ResponsivePieCanvas
        data={data}
        valueFormat=" >-~%"
        margin={{ top: 10, right: 100, bottom: 10, left: 100 }}        
        innerRadius={0.3}
        padAngle={0.8}
        cornerRadius={5}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'accent' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        theme={{
          labels : {
            text: {
              fontSize: 14
            }
          },         
        }}
        arcLinkLabelsSkipAngle={1}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={2}
        arcLabelsRadiusOffset={0.5}
        arcLinkLabelsStraightLength={4}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={1}
        arcLabelsTextColor="#333333"        
      />
    </div>
  );  
}

export default PieChart;