import { useNavigation } from 'react-router-dom';

function SubmitBtn({ text }: { text?: string }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button type='submit' className='btn btn-primary btn-block' disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <span className='loading loading-spinner'>sending..</span>
                </>
            ) : (
                text || 'submit'
            )}
        </button>
    );
}
export default SubmitBtn;
