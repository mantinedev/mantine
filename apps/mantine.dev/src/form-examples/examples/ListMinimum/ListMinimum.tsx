import { useRef } from 'react';
import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Button, Group, Input, Stack, Text, TextInput } from '@mantine/core';
import { FORM_INDEX, FormErrors, formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

interface Skill {
  id: string;
  name: string;
}

interface ProjectValues {
  projectName: string;
  skills: Skill[];
}

function validateSkills(skills: Skill[]) {
  if (skills.length === 0) {
    return 'Add at least one skill';
  }

  const names = skills.map((skill) => skill.name.trim().toLowerCase()).filter(Boolean);
  return new Set(names).size === names.length ? null : 'Skills must be unique';
}

export function ListMinimum() {
  const addSkillRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ProjectValues>({
    initialValues: {
      projectName: '',
      skills: [
        {
          id: randomId(),
          name: '',
        },
      ],
    },
    validateInputOnChange: [`skills.${FORM_INDEX}.name`],
    validate: {
      projectName: isNotEmpty('Project name is required'),
      skills: {
        [formRootRule]: validateSkills,
        name: isNotEmpty('Skill name is required'),
      },
    },
  });

  // Uniqueness depends on all names, revalidate the list while its error is shown
  form.watch('skills', () => {
    if (form.errors.skills) {
      form.validateField('skills');
    }
  });

  const handleSubmit = (values: ProjectValues) => {
    notifications.show({
      title: 'Project saved',
      message: `Project ${values.projectName} saved with ${values.skills.length} ${values.skills.length === 1 ? 'skill' : 'skills'}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const path = Object.keys(errors)[0];
    const node =
      path === 'skills'
        ? (form.getInputNode('skills.0.name') ?? addSkillRef.current)
        : form.getInputNode(path);
    node?.focus();
  };

  const skills = form.getValues().skills.map((skill, index) => (
    <Group key={skill.id} align="flex-start" wrap="nowrap">
      <TextInput
        size="md"
        placeholder="React"
        aria-label="Skill name"
        style={{ flex: 1 }}
        {...form.getInputProps(`skills.${index}.name`)}
      />

      <ActionIcon
        variant="default"
        size="input-md"
        aria-label="Remove skill"
        onClick={() => form.removeListItem('skills', index)}
      >
        <TrashIcon size={18} color="var(--mantine-color-red-6)" />
      </ActionIcon>
    </Group>
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <TextInput
          size="md"
          label="Project name"
          placeholder="Mantine"
          withAsterisk
          {...form.getInputProps('projectName')}
        />

        <Stack gap="xs">
          <Input.Label size="md">Skills</Input.Label>

          {skills.length > 0 ? skills : <Text size="sm">No skills added</Text>}
          {form.errors.skills && <Input.Error size="md">{form.errors.skills}</Input.Error>}

          <Group>
            <Button
              ref={addSkillRef}
              variant="default"
              leftSection={<PlusIcon size={16} />}
              onClick={() =>
                form.insertListItem('skills', {
                  id: randomId(),
                  name: '',
                })
              }
            >
              Add skill
            </Button>
          </Group>
        </Stack>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Create project
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
