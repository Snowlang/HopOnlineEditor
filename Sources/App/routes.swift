import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    // Basic "Hello, world!" example
    router.get("hello") { req in
        return "Hello, world!"
    }

    let editorController = EditorController()
    try router.register(collection: editorController)

    let hopController = HopController()
    try router.register(collection: hopController)
}
