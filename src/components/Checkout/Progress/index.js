import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Styles from './Progress.module.scss';

function CircularProgressWithLabel(props) {
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<center>
				<CircularProgress variant="determinate" thickness={4.5} className={Styles.circul} size={124} value={100} />
				<CircularProgress variant="determinate" thickness={4.5} size={124} value={100 - Math.round(props.value * 100 / props.time)} />
			</center>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant="caption" component="div" color="white" className={Styles.fs_26}>
					{`${defaultNumber(Math.floor(props.value / 60))}:${defaultNumber(Math.floor(props.value % 60))}`}
				</Typography>
			</Box>
		</Box>
	);
}

function defaultNumber(num) {
	if (Math.floor(num / 10) == 0) {
		return "0" + num;
	} else {
		return String(num);
	}
}

CircularProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate variant.
	 * Value between 0 and 100.
	 * @default 0
	 */
	value: PropTypes.number.isRequired,
};

export default function Progress(props) {
	// const [progress, setProgress] = React.useState(props.time);

	// React.useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setProgress((prevProgress) => (prevProgress <= 0 ? 0 : prevProgress - 1));
	// 	}, 1000);
	// 	return () => {
	// 		clearInterval(timer);
	// 	};
	// }, []);

	return <CircularProgressWithLabel value={props.progress} time={props.time} />;
}