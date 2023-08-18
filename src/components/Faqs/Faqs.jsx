import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import styles from "./Faqs.module.css"
import { ExpandMore } from '@mui/icons-material';

const Faqs = () => {

	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (ev, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	}

  return (
    <div className={styles.faqWrapper}>
      <h1>FAQs</h1>
			<div className={styles.accordionWrapper}>
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={styles.accordionTop}>
					<AccordionSummary
						expandIcon={<ExpandMore className={styles.expandIcon} />}
						aria-controls='panel1-content'
						id='panel1-header'
						className={styles.accordionSummary}
					>
						<Typography>Is QTify free to use?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>Yes, It is free to use.</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded==='panel2'} onChange={handleChange('panel2')} className={styles.accordionTop}>
				<AccordionSummary
						expandIcon={<ExpandMore className={styles.expandIcon} />}
						aria-controls='panel2-content'
						id='panel2-header'
						className={styles.accordionSummary}
					>
						<Typography>Can I download and listen to songs offline?</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>Sorry, unfortunately we don't provide the service to download any songs.</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
    </div>
  )
}

export default Faqs