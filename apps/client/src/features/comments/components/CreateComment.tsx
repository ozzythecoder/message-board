import { useForm } from '@tanstack/react-form';
import { Button } from 'src/components/ui/Button';
import { Textarea } from 'src/components/ui/Textarea';
import style from './createComment.module.scss';

export function CreateComment() {
    const form = useForm<{ body: string }>({
        defaultValues: {
            body: '',
        },
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });

    return (
        <div className={style.comment_form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
            >
                <div>
                    <form.Field name="body">
                        {(field) => (
                            <Textarea
                                name={field.name}
                                value={field.state.value}
                                placeholder={'Share your thoughts...'}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                        )}
                    </form.Field>
                </div>
                <div className={style.button_row}>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    );
}
