import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    useDisclosure,
    VStack,
    Image,
    Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';
import logo from "../../../assets/images/icon.png"


//link button component
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'} color={"purple.400"}>{title}</Button>
    </Link>
);

const Header = ({ isAuthenticated = false, user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const logoutHandler = () => {
        onClose();
        dispatch(logout());
        console.log("logout");
    };

    return (
        <>
            <ColorModeSwitcher />

            <Button
                onClick={onOpen}
                colorScheme={'purple'}
                width="12"
                height={'12'}
                rounded="full"
                zIndex={'overlay'}
                position={'fixed'}
                top="6"
                left="6"
            >
                <RiMenu5Fill />
            </Button>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropBlur={"5px"} />
                <DrawerContent>


                    <DrawerHeader borderBottomWidth={'1px'}>
                        <HStack gap={"6"}>
                            <Image src={logo} h={"25px"} />
                            <Text children={"Knowledge Nexus"} />
                        </HStack>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing={'4'} alignItems="flex-start">
                            <LinkButton onClose={onClose} url="/" title="Home" />
                            <LinkButton
                                onClose={onClose}
                                url="/courses"
                                title="Browse All Courses"
                            />
                            <LinkButton
                                onClose={onClose}
                                url="/request"
                                title="Request a Course"
                            />
                            <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                            <LinkButton onClose={onClose} url="/about" title="About" />

                            <HStack
                                justifyContent={'space-evenly'}
                                position="absolute"
                                bottom={'2rem'}
                                width="80%"
                            >
                                {isAuthenticated ? (
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to="/profile">
                                                    <Button variant={'ghost'} colorScheme={'purple'}>
                                                        Profile
                                                    </Button>
                                                </Link>
                                                <Button variant={'ghost'} onClick={logoutHandler}>
                                                    <RiLogoutBoxLine style={{ margin: '4px' }} />
                                                    Logout
                                                </Button>
                                            </HStack>

                                            {user && user.role === 'admin' && (
                                                <Link onClick={onClose} to="/admin/dashboard">
                                                    <Button colorScheme={'purple'} variant="ghost">
                                                        <RiDashboardFill style={{ margin: '4px' }} />
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                            )}
                                        </VStack>
                                    </>
                                ) : (
                                    <>
                                        <Link onClick={onClose} to="/login">
                                            <Button colorScheme={'purple'}>Login</Button>
                                        </Link>

                                        <p>OR</p>

                                        <Link onClick={onClose} to="/register">
                                            <Button colorScheme={'purple'}>Sign Up</Button>
                                        </Link>
                                    </>
                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header