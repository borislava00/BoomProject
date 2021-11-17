import styles from "./ProductTabs.module.scss"
import User from "../user/User";
import { useState } from "react";
import PropTypes from 'prop-types';
import { formatDistance, parseISO } from 'date-fns'
import { Box , Typography , Tabs , Tab , Table , TableBody , TableRow , TableCell } from "@mui/material";

function TabContext(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabContext.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

export default function ProductTabs ({ text = " " , bids = [ ] }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const setOpacity = (index) => {
        if(index % 2 == 0) {
            return 'rgba(78,36,242, 0.05)';
        }
        return 'rgba(78,36,242, 0.15)'
    }

    return ( 
        <div className={styles["product-tabs"]}>
            <div className={styles.tabs}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab className={styles["tab-details"]} label="DETAILS" />
                    <Tab className={styles["tab-bids"]} label="BIDS" />
                </Tabs>
            </div>
            <TabContext value={value} index={0}>
                {text}
            </TabContext>
            <TabContext value={value} index={1}>
                <Table>
                    <TableBody>
                        {bids.map( ( bid , index ) => ( 
                            <TableRow className={styles[`table-row-${index}`]} key={index} sx={{ backgroundColor : setOpacity(index) }}>
                                <TableCell>
                                    <User {...bid.user} />
                                </TableCell>
                                <TableCell>{bid.amount} ETH</TableCell>
                                <TableCell>{formatDistance(parseISO(bid.date), new Date(), { addSuffix: true })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>               
            </TabContext>    
        </div>
    );
}