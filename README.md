# Auto Fold & Unfold for VS Code

This extension is under construction. Auto F&U automatically folds and unfolds when the cursor enters or leaves the function.

## How to install

```bash
code --install-extension levipires.auto-fold-unfold
```

or download it from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=levipires.auto-fold-unfold#overview).

## How to use

It's simple! You just need to place the cursor inside a function for it to open. And guess what happens if you leave the function!? Exactly!
It magically closes and puts miles of code under one line. It's a piece of cake.

And now, if you are using version 0.4.0 or higher, you can use this same magic when saving, when opening a file and when changing between files. It's all an option.

![AU Demo](https://raw.githubusercontent.com/levi-pires/auto-fold-unfold/master/images/demo.gif)

## Release Notes

The 0.5.x version of the extension contains the following improvements:

* `auto-fold-unfold.behaviorOnEdit` was added.
* `auto-fold-unfold.foldAndClose` was added to compensate for the unwanted behavior of `auto-fold-unfold.onDidChangeActiveTextEditor`.

## Settings

```jsonc
{
    /**
    * These settings can be configured in the user, remote, workspace or folder settings.
    */

    /**
    * Folds or unfolds while you are coding.
    */
    "auto-fold-unfold.onEdit": /*default is true*/,

    /**
    * Defines fold and unfold while editing behavior.
    * If "parent", only the block where the cursor is will be unfolded.
    * If "family", the block where the cursor is and it's children will be unfolded.
    */
    "auto-fold-unfold.behaviorOnEdit": /*default is "parent"*/,

    /**
    * Folds all whenever a file is opened or the active editor changes.
    * This option might reduce productivity.
    */
    "auto-fold-unfold.onDidChangeActiveTextEditor": /*default is false*/,

    /**
    * Folds all when the document is saved.
    * For the sake of data integrity the editor might save without firing this event.
    */
    "auto-fold-unfold.onSaved": /*default is false*/
}
```

## Commands

Command | Keybinding | Description
--------|------------|------------
auto-fold-unfold.foldAndClose | ctrl+f ctrl+w | Folds the code and closes the editor. This command is an alternative to `auto-fold-unfold.onDidChangeActiveTextEditor`.

## Requirements

This extension doesn't have any requirement.

## Limitations

* This is a under construction version. Please log any issues you find on [GitHub](https://github.com/levi-pires/auto-fold-unfold/issues).
* VS Code only executes the unfold command when the cursor is in the blue zone. I'm working on it so please don't open an issue to talk about it.

## Did you like it?

So [give me five stars](https://marketplace.visualstudio.com/items?itemName=levipires.auto-fold-unfold#review-details)

## How to find me

* Email: waltvy.comercial@gmail.com

* [LinkedIn](https://www.linkedin.com/in/levi-pires-5a74331a6)

* [GitHub](https://www.github.com/levi-pires)
