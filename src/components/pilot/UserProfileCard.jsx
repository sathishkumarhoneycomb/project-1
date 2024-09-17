
import { Popover, OverlayTrigger, Button, Card, Image } from 'react-bootstrap';


const UserProfileCard = ({show, handleClose}) => {

        const popover = (
          <Popover id="popover-basic">
            <Popover.Header as="h3">User Profile</Popover.Header>
            <Popover.Body>
              <Card >
                <Card.Body>
                  <Image src="user-image-url.jpg" roundedCircle />
                  <Card.Title>John Doe</Card.Title>
                  <Card.Text>
                    john.doe@example.com
                  </Card.Text>
                  <Button variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Popover.Body>
          </Popover>
        );
      
        return (
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="light">
              <i className="fa fa-user" /> {/* User Icon */}
            </Button>
          </OverlayTrigger>
        );
}

export default UserProfileCard;
