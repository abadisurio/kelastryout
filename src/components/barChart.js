import Chart from 'chart.js';
import React from 'react';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }
    componentDidMount() {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    label: this.props.title,
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.color
                }]
            }
        });
    }
    render() {
        return (
        <canvas ref={this.chartRef} />
        );
    }
}

export default BarChart;