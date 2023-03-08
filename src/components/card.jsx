import React, { useRef } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormHelperText, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { deletePost, editPost } from '@/store/post'
import { useForm } from 'react-hook-form'

const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const handleDelete = () => {
        dispatch(deletePost(post.id))
    }

    const onSubmit = data => {
        const payload = {
            userId: post.userId,
            id: post.id,
            title: data.title,
            body: data.body,
        }
        dispatch(editPost(payload))
        onClose()
    }

    return (
        <>
            <Card className='bg-slate-600' maxW='sm'>
                <CardHeader className='p-2'>
                    <Heading size='md'>{post?.title}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{post?.body}</Text>
                </CardBody>
                <CardFooter gap={2}>
                    <Button onClick={onOpen}>Edit</Button>
                    <Button colorScheme='red' onClick={handleDelete}>
                        Delete
                    </Button>
                </CardFooter>
            </Card>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Edit</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input type='text' defaultValue={post.title} {...register('title', { required: true })} />
                                {errors.title && <FormHelperText color='red'>Title is required.</FormHelperText>}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Body</FormLabel>
                                <Input type='text' defaultValue={post.body} {...register('body', { required: true })} />
                                {errors.body && <FormHelperText color='red'>Body is required.</FormHelperText>}
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' isLoading={false} onClick={handleSubmit(onSubmit)}>
                            Edit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PostCard
