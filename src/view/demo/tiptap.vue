<template>
  <div>
    <button @click="editor.chain().focus().toggleBold().run()">Bold</button>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { EditorContent, useEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

export default {
  components: {
    EditorContent,
  },
  setup() {
    const editor = useEditor({
      extensions: [StarterKit],
      content: "<p>Hello World!</p>",
    });

    return {
      editor,
    };
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>
