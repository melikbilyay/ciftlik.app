
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';

const RecentTransactions = () => {
  return (
    <DashboardCard title="Bugün Yapılacaklar">
      <>
        <Timeline
          className="theme-timeline"
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          sx={{
            p: 0,
            mb: '-40px',
            '& .MuiTimelineConnector-root': {
              width: '1px',
              backgroundColor: '#efefef'
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.5,
              paddingLeft: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent>09:30 </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Süt sağımı.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>10:00 </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">Veteriner Kontrolü.</Typography>{' '}
              <Link href="/" underline="none">
                Veteriner Melik Bilyay
              </Link>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>12:00 </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Yem dağıtımı.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>15:30 </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">Günlük rapor.</Typography>{' '}

            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>16:30 </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="error" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography fontWeight="600">Samanların mereğe taşınması.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>17:30</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="success" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>Ödemelerin yapılması.</TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </DashboardCard>
  );
};

export default RecentTransactions;
